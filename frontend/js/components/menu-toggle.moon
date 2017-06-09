<template>
  <div id="menu-toggle" m-on:click="menuToggle">
    <div class="top line"></div>
    <div class="middle line"></div>
    <div class="bottom line"></div>
  </div>
</template>

<script>
  exports = {
    methods: {
      menuToggle () {
        // TODO: so moonjs cannot handle communication between components, or what?!(
        document.getElementById('learned-today').classList.toggle('menu')
      }
    }
  }
</script>

<style>
  #menu-toggle {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    margin: 1em 2em;
    cursor: pointer;
    z-index: 10000;
  }
  #menu-toggle > .line {
    width: 100%;
    height: .1rem;
    background: var(--text-color);
    margin: .43em;
    transition: opacity .1s, transform .2s;
  }
  #learned-today.menu #menu-toggle > .line { height: .1rem; }
  #learned-today.menu #menu-toggle > .middle { opacity: 0; }
  #learned-today.menu #menu-toggle > .top { transform: rotate(-30deg); }
  #learned-today.menu #menu-toggle > .bottom { transform: rotate(30deg); }
</style>
