use std::path::{Path, PathBuf};
use rocket::request::Request;
use rocket::response::NamedFile;

#[error(404)]
fn not_found(req: &Request) -> Option<NamedFile> {
  NamedFile::open(Path::new("frontend/dist/index.html")).ok()
}

#[get("/<file..>")]
fn spa (file: PathBuf) -> Option<NamedFile> {
    match file.extension() {
        Some(ext) if ext == "json" => return None,
        _ => {}
    }
    NamedFile::open(Path::new("frontend/dist/").join(file)).ok()
}
