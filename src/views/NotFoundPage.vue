<template>
  <div class="not-found">
    <h1 class="info-text">Страница не найдена</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-text {
    font-weight: 300;
    font-size: 3.6rem;
    line-height: 4.2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
</style>