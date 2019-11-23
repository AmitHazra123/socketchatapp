// require library module for validation
const Validator = require("validator");

// require is-empty helper module to check any data empty or not
const isEmpty = require("./is-empty");

exports.validateSignUpUserDetailsInput = data => {
  let errors = {};

  // asign each empty object or any type of data members as string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // check for user name is empty or not
  if (Validator.isEmpty(data.name)) {
    errors.name = "User Name is required";
  }

  // check for user email is empty or not
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Id is required";
  }

  // check for email is valid or not
  if (!Validator.isEmpty(data.email)) {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is not valid";
    }
  }

  // check for password is empty or not
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // check for confirm password is empty or not
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is required";
  }

  // check for confirm password is matched with the original password or not
  if (!Validator.isEmpty(data.password2)) {
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Confirm Password is not matched";
    }
  }

  // return errors and user details information is valid or not
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

exports.validateLoginUserDetailsInput = data => {
  let errors = {};

  // asign each empty object or any type of data members as string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // check for user email is empty or not
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Id is required";
  }

  // check for email is valid or not
  if (!Validator.isEmpty(data.email)) {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is not valid";
    }
  }

  // check for password is empty or not
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // return errors and user details information is valid or not
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
