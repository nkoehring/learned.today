#![feature(plugin)]
#![plugin(rocket_codegen)]
extern crate rocket;
#[macro_use] extern crate rocket_contrib;

mod ui;
mod api;

fn rocket() -> rocket::Rocket {
    rocket::ignite()
    .mount("/", routes![ui::index])
    .mount("/api", routes![api::status])
}

fn main() {
  rocket().launch();
}
