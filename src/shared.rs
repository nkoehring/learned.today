pub enum AuthMethod {
  OAuth,
  XAuth,
  SecureLogin,
  Password
}
pub struct User {
  pub username: String,
  pub method: AuthMethod,
  pub authenticated: bool
}
