export const isValidEmailAddress = (email) => {
    if (email && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return true;
    }
    return false;
  };
  
  export const isValidateSpecialCharacters = (value) => {
    if (!/[^a-zA-Z\d\s]/.test(value)) {
      return true;
    }
    return false;
  };
  

  export const isValidPassword = (password) => {
    if (password && password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      return true;
    }
    return false;
  };