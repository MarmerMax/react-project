export const validate = (email, password) => {
  let errors = {}

  //Email Errors
  if(!email){
    errors.email = "Email required"
  } else if(!validateEmail(email)){
    errors.email = "Invalid email address"
  }

  //Password Errors
  if(!password){
    errors.password = "Password required"
  } else if(password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  return errors;
};

function validateEmail(email) {
  const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};