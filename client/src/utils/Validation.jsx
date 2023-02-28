import validator from 'validator';

export const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// Uses NPM validator
export const validEmail = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

export const validUrl = (value) => {
  if (!validator.isURL(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid URL.
      </div>
    );
  }
};


export const validUsername = (value) => {
  if (value.length < 5 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 5 and 20 characters.
      </div>
    );
  }
};

export const validPassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 8 and 40 characters.
      </div>
    );
  }
};