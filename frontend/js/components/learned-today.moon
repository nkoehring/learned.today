<template>
  <div id="learned-today">
    <menu-toggle />
    <div class="row main">
      <aside class="column">
        <main-nav />
      </aside>
      <div class="content column" m-on:click="onClick">
        <magic-header username="{{username}}" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
const Moon = require("moonjs")
const MoonRouter = require("moon-router")
const MainNav = require("./main-nav.moon")(Moon)
const MenuToggle = require("./menu-toggle.moon")(Moon)
const MagicHeader = require("./magic-header.moon")(Moon)

exports = {
  props: [],
  data: {
    username: '',
    menuHidden: false
  },
  methods : {
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
</style>
