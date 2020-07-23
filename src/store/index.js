import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = 'https://swapi.dev/api'

const addIdInCards = function(data) {
  const result = data.map(item => {
    const cardIds = item.url.split('/');
    const cardId = cardIds[cardIds.length - 2];
    item.id = cardId;

    return item;
  })

  return result;
}

export default new Vuex.Store({
  state: {
    personCards: [],
    favorites: JSON.parse( localStorage.getItem('favorites') ) || [],
    totalCards: 0,
    currentPage: 1,
    perPage: 10,
    status: '',
    error: null,
  },
  mutations: {
    GET_CARDS_REQUEST(state) {
      state.status = 'request';
    },
    GET_CARDS_SUCCESS(state, { cards, totalCards }) {
      state.status = 'success';
      state.personCards = cards;
      state.totalCards = totalCards;
    },
    GET_CARDS_FAILED(state, error) {
      state.status = 'error';
      state.error = error;
    },
    CHANGE_PAGE(state, page) {
      state.currentPage = page;
    },
    FIND_PERSON_REQUEST(state) {
      state.status = 'request';
    },
    FIND_PERSON_SUCCESS(state, { cards, totalCards }) {
      state.status = 'success';
      state.personCards = cards;
      state.totalCards = totalCards;
    },
    FIND_PERSON_FAILED(state, error) {
      state.status = 'error';
      state.error = error;
    },
    ADD_FAVORITE(state, card) {
      state.favorites = [...state.favorites, card];
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    DELETE_FAVORITE(state, card) {
      state.favorites = state.favorites.filter(item => item.id !== card.id)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  },
  actions: {
    GET_CARDS({ commit }, params = { page: 1}) {
      return new Promise((resolve, reject) => {        
        commit('GET_CARDS_REQUEST');
                
        axios.get(`${apiUrl}/people`, { params })
          .then(response => {
            const cards = response.data;
            
            const data = {
              totalCards: cards.count,
              cards: addIdInCards(cards.results)
            };

            commit('GET_CARDS_SUCCESS', data);
            resolve(cards);
          })
          .catch(err => {
            commit('GET_CARDS_FAILED', err);

            reject(err);
          })
      })
    },
    FIND_PERSON({ commit }, params) {
      return new Promise((resolve, reject) => {
        commit('CHANGE_PAGE', 1)
        commit('FIND_PERSON_REQUEST');

        axios.get(`${apiUrl}/people`, { params })
          .then(response => {
            const cards = response.data;
            
            const data = {
              totalCards: cards.count,
              cards: addIdInCards(cards.results)
            };

            commit('FIND_PERSON_SUCCESS', data);
            resolve(cards);
          })
          .catch(err => {
            commit('FIND_PERSON_FAILED', err);
            reject(err);
          })

      })
    }
  },
  getters: {
    status: state => state.status,
    personCards: state => state.personCards,
    totalCards: state => state.totalCards,
    currentPage: state => state.currentPage,
    perPage: state => state.perPage,
    favorites: state => state.favorites,
    error: state => state.error
  }
})
