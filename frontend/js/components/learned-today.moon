<template>
  <div id="learned-today">
    <menu-toggle />
    <div class="row main">
      <aside class="column">
        <main-nav />
      </aside>
      <div class="content column">
        <header>
          <h1>
            <span>{{ username }}</span>
          </h1>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
const Moon = require("moonjs")
const MainNav = require("./main-nav.moon")(Moon)
const MenuToggle = require("./menu-toggle.moon")(Moon)


exports = {
  data: {
    username: 'koehr',
    menuHidden: false
  },
  methods : {
    menuToggleClick () {
      console.log("menuToggleClick")
    }
  },
  hooks: {
    mounted () {
      this.on('menu-toggle', () => {
        console.log('menu toggle event!')
        this.set('menuHidden', !this.get('menuHidden'))
      })
      Moon.nextTick(() => {
        document.getElementById('app').classList.add('loaded')
      })
    }
  }
}
</script>

<style>
  #learned-today > .main.row {
    flex-flow: row nowrap;
    transition: transform .2s ease-out, background .15s linear;
    transform: translateX(-30rem);
  }
  #learned-today.menu > .main.row {
    transform: translateX(0rem);
  }
  #learned-today > .main > .content.column {
    flex: 1 0 100%;
  }
  #learned-today > .main > aside.column {
    flex: 0 0 30rem;
    background: var(--shade-color);
    height: 100vh;
  }
  #learned-today .column > header {
    display: flex;
    flex: 1 1 100%;
    justify-content: space-between;
    align-content: center;
    height: 8rem;
  }
  #learned-today .column > header > h1 {
    width: 100%;
    font-size: 6rem;
    line-height: 8rem;
    margin: 2rem;
    color: var(--outline-color);
    text-align: center;
  }
  #learned-today .column > header > h1 > span {
    margin: 0 .3em;
    font-weight: 200;
    color: var(--text-color);
  }
</style>
