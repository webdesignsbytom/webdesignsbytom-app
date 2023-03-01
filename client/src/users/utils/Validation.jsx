import validator from 'validator';

export const required = (value) => {
  if (!value) {
    return false;
  }
};

// Uses NPM validator
export const validEmail = (value) => {
  if (!validator.isEmail(value)) {
    return false;
  }
};

export const validUrl = (value) => {
  if (!validator.isURL(value)) {
    return false;
  }
};

export const validUsername = (value) => {
  if (value.length < 5 || value.length > 20) {
    return false;
  }
};

export const validPassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return false;
  }
};
