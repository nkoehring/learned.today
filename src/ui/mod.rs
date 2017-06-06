extern crate pencil;
use pencil::{Request, PencilResult};

pub fn hello(_: &mut Request) -> PencilResult {
    Ok("Hello World!".into())
}
