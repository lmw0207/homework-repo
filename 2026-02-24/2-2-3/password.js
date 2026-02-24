function isValidPassword(password) {
  if (password.length < 8) return false;
  if (!/[a-zA-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!@#$%]/.test(password)) return false;

  return true;
}
module.exports = isValidPassword;
