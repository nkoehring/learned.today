extern crate pencil;
use std::collections::BTreeMap;
use pencil::{Request, PencilResult, jsonify};

pub fn status(_: &mut Request) -> PencilResult {
    let mut d = BTreeMap::new();
    d.insert("name", "learned.today");
    d.insert("version", "0.0.1");
    d.insert("status", "online");

    return jsonify(&d);
}

