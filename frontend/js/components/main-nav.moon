<template>
  <nav id="main-nav" m-literal:class="{'col-2': true, hidden: !shown}">
    <div id="nav-trigger" m-on:click="toggle">
      <div class="top line"></div>
      <div class="middle line"></div>
      <div class="bottom line"></div>
    </div>
    <menu>
      <li>some</li>
      <li>menu</li>
      <li>items</li>
    </menu>
  </nav>
</template>

<script>
exports = {
  data: {
    shown: false
  },
  methods: {
    toggle () {
      this.shown = !this.shown
      console.log("shown", this.shown)
    }
  }
}
</script>

<style>
  #main-nav.hidden {
    transform: translateX(-12rem);
  }
  #nav-trigger {
    width: 3rem;
    height: 3rem;
    margin: 1em;
    cursor: pointer;
    float: right;
  }
  #nav-trigger .line {
    width: 100%;
    height: .1rem;
    background: var(--text-color);
    margin: .5em;
  }
</style>
