/*=============================
  Primary Application Code
=============================*/

const Moon = require("moonjs");
const LearnedToday = require("./components/learned-today.moon")(Moon);
const MainNav = require("./components/main-nav.moon")(Moon);

var app = new Moon({
  el: "#app"
});
