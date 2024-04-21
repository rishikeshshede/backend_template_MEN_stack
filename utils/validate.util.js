module.exports = {
  validateEmail: (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = emailPattern.test(email);
    return { isValid: isValid, msg: isValid ? "" : "Invalid email format" };
  },
};
