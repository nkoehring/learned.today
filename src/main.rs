#![feature(plugin)]
#![plugin(rocket_codegen)]
extern crate rocket;
#[macro_use] extern crate rocket_contrib;

mod ui;
mod api;
mod shared;
use shared::{User, AuthMethod};

fn rocket() -> rocket::Rocket {
    rocket::ignite()
    .mount("/api", routes![api::root, api::status])
    .mount("/", routes![ui::spa])
    .catch(errors![ui::not_found])
    .manage(User{
        username: "koehr".into(),
        method: AuthMethod::SecureLogin,
        authenticated: true
    })
}

fn main() {
  rocket().launch();
}
