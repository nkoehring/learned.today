<template>
  <div id="learned-today" class="row">
    <main-nav />
    <div class="col-10">
      <header>
        <h1>
          <span>{{ username }}</span>
        </h1>
      </header>
    </div>
  </div>
</template>

<script>
const Moon = require("moonjs")
const MainNav = require("./main-nav.moon")(Moon)

exports = {
  data: {
    username: 'koehr'
  },
  hooks: {
    mounted () {
      Moon.nextTick(() => {
        document.getElementById('app').classList.add('loaded')
      })
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
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
  header > h1 > span {
    margin: 0 .3em;
    font-weight: 200;
    color: var(--text-color);
  }
</style>
