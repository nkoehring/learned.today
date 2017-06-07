use rocket::State;
use rocket::response::Redirect;
use rocket_contrib::{JSON, Value};
use shared::User;

#[get("/")]
pub fn root () -> Redirect {
  Redirect::to("/api/status")
}

#[get("/status")]
pub fn status (user: State<User>) -> JSON<Value> {
    JSON(json!({
        "name": "learned.today",
        "version": "0.0.1",
        "online": true,
        "user": user.username
    }))
}
