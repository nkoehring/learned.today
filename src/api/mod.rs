use rocket_contrib::{JSON, Value};

#[get("/status", format = "application/json")]
pub fn status () -> JSON<Value> {
    JSON(json!({
        "name": "learned.today",
        "version": "0.0.1",
        "online": "true"
    }))
}
