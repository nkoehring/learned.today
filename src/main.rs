extern crate pencil;
use pencil::{Pencil, redirect};

mod ui;
mod api;

fn main() {
    let mut app = Pencil::new("/nanobe");
    app.get("/api", "api_root", |_| redirect("/api/status", 302));
    app.get("/api/status", "api_status", api::status);
    app.get("/", "hello", ui::hello);
    app.run("127.0.0.1:8000");
}
