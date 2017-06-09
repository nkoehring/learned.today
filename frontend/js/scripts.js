/*=============================
  Primary Application Code
=============================*/

const Moon = require("moonjs");
const LearnedToday = require("./components/learned-today.moon")(Moon);
const MoonRouter = require("moon-router");

const NewEntry = require("./components/new-entry.moon")(Moon);
const Login = require("./components/login.moon")(Moon);

Moon.use(MoonRouter)
const router = new MoonRouter({
  default: "/",
  map: {
    "/": "new-entry",
    "/login": "login"
  }
});

const app = new Moon({
  el: "#app",
  data: { router },
  router
});
