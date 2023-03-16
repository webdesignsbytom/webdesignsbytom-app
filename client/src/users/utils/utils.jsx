export const registerDataTemplate = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  country: 'United Kingdom',
  agreedToTerms: false,
};

export const registerFormResponses = {
  password: false,
  passwordMatchError: false,
  passwordLengthError: false,
  agreedToTermsError: false,
  passwordMessage: 'Password Accepted',
  passwordError: 'Passwords do not match',
};

export const loginDataTemplate = {
  email: '',
  password: '',
};

export const sampleUserData = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  country: '',
  role: 'USER',
  isVerified: false,
  profileImage: '',
  createdAt: '',
  updatedAt: '',
};

export const statusResults = {
  status: false,
  result: 'failed',
  message: '',
};
