// require library module for validation
const Validator = require("validator");

// require is-empty helper module to check any data empty or not
const isEmpty = require("./is-empty");

module.exports = function validateChatDetailsInput(data) {
  let errors = {};

  // asign each empty object or any type of data members as string
  data.content = !isEmpty(data.content) ? data.content : "";

  // check for user email is empty or not
  if (Validator.isEmpty(data.content)) {
    errors.content = "Chat Content is required";
  }

  // return errors and user details information is valid or not
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
