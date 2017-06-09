<template>
  <header>
    <h1>
      <em m-if="username">{{ username }}</em>
      <span m-if="username">.</span>
      <em>learned</em>
      <span>.</span>
      <em>today</em>
      <span m-if="!username">/</span>
      <em m-if="!username">login</em>
    </h1>
  </header>
</template>

<script>
  exports = {
    props: ['username']
  }
</script>

<style scoped>
  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: space-between;
    align-content: center;
    height: 8rem;
  }
  header > h1 {
    width: 100%;
    font-size: 6rem;
    line-height: 8rem;
    margin: 2rem;
    color: var(--outline-color);
    text-align: center;
  }
  header > h1 > em {
    margin: 0 .3em;
    font-weight: 200;
    color: var(--text-color);
  }
</style>
