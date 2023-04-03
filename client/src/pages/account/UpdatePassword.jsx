import React, { useContext, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { SubmitButton } from '../../components/utils/SubmitButtons';
import { ToggleContext } from '../../context/ToggleContext';
import { statusResults } from '../../users/utils/utils';
// Icons
import OpenEye from '../../assets/svg/eye.svg';
import { TiArrowBack } from 'react-icons/ti';
// Functions
import {
  showPassword,
  showConfirmPassword,
} from '../../users/utils/PasswordReveal';

function UpdatePassword() {
  const { toggleNavigation } = useContext(ToggleContext);
  // Form data
  const [newPasswordForm, setNewPasswordForm] = useState({});

  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [fieldTypeConfirm, setFieldTypeConfirm] = useState('password');
  const [eyeIconConfirm, setEyeIconConfirm] = useState(OpenEye);
  const [formResponses, setFormResponses] = useState('');
  const [hiddenPass, setHiddenPass] = useState('invisible h-4');
  const [inputStyle, setInputStyle] = useState('standard__inputs');

  let navigate = useNavigate();
  const location = useLocation();

  console.log('NAVIGATION', navigate);
  console.log('location', location);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (newPasswordForm.password.length > 8) {
      setFormResponses({
        ...formResponses,
        passwordLengthError: false,
      });
    } else {
      setFormResponses({
        ...formResponses,
        passwordLengthError: true,
      });
    }

    setNewPasswordForm({
      ...newPasswordForm,
      [name]: value,
    });
  };

  const updatePassword = () => {
    console.log('update');
  };

  return (
    <div className='bg-white dark:bg-black h-[calc(100vh-98px)] lg:h-screen w-full'>
      <Navbar />
      {!toggleNavigation && (
        <main className='mx-2'>
          <section className='my-4'>
            <Link to='/account'>
              <div className='p-1 bg-main-colour rounded-xl text-white w-fit'>
                <TiArrowBack size={30} />
              </div>
            </Link>
          </section>
          <div className='my-4'>
            <h1>Password update</h1>
          </div>
          <section>
            <form>
              {/* <!-- Password input --> */}
              <div>
                <div className='relative flex z-0'>
                  <input
                    type={fieldType}
                    name='password'
                    className={inputStyle}
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <label
                    className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
                    htmlFor='toggle'
                  >
                    <img
                      onClick={() =>
                        showPassword(fieldType, setFieldType, setEyeIcon)
                      }
                      src={eyeIcon}
                      className='h-6 w-6 my-2 mr-2'
                      alt='open eye'
                    />
                  </label>
                </div>
                <p className='h-4'></p>
              </div>

              {/* <!--Confirm Password input --> */}
              <div>
                <div className='relative flex z-0'>
                  <input
                    type={fieldTypeConfirm}
                    name='confirmPassword'
                    className={inputStyle}
                    placeholder='Confirm Password'
                    onChange={handleChange}
                  />
                  <label
                    className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
                    htmlFor='toggle'
                  >
                    <img
                      onClick={() =>
                        showConfirmPassword(
                          fieldTypeConfirm,
                          setFieldTypeConfirm,
                          setEyeIconConfirm
                        )
                      }
                      src={eyeIconConfirm}
                      className='h-6 w-6 my-2 mr-2'
                      alt='open eye'
                    />
                  </label>
                </div>
                <p className={hiddenPass}>
                  {formResponses.password === true && (
                    <span className='text-xs text-green-500 dark:text-green-700 font-medium'>
                      {formResponses.passwordMessage}
                    </span>
                  )}
                  {formResponses.password === false && (
                    <span className='text-xs text-red-500 dark:text-red-700 font-medium'>
                      {formResponses.passwordError}
                    </span>
                  )}
                </p>
              </div>

              {/* <!-- Submit button --> */}
              <div className='mb-2'>
                <SubmitButton
                  loadingAnimation={updateAnimation}
                  mainButtonContent={mainButtonContent}
                  responseMessage={updateResponseMessage}
                  buttonMessage='Update Profile'
                  spinnerHeight='h-5'
                  spinnerWidth='w-5'
                  action={updatePassword}
                />
              </div>
            </form>
          </section>
        </main>
      )}
    </div>
  );
}

export default UpdatePassword;
