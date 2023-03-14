import React, { useContext, useEffect, useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
import PageOptions from '../../components/options/pageOptions/PageOptions';
import CompenentOptions from '../../components/options/componentOptions/CompenentOptions';
import Buttons from '../../components/options/Buttons';
import SavedDesigns from './SavedDesigns';
import UserStories from './UserStories';
import RegisterForm from '../../users/register/RegisterForm';
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';
// Icons
import QuestionMark from '../../img/questionMark.svg';
import FloppyDisk from '../../img/floppyDisk.svg';
import Bin from '../../img/bin.svg';
import Undo from '../../img/undo.svg';
import NewFile from '../../img/newFile.svg';
import OpenEye from '../../img/eye.svg';

// Utils
import { paletteTemplate } from '../../utils/utils';
import { showPassword, showConfirmPassword } from '../../utils/PasswordReveal';
import { useNavigate } from 'react-router-dom';
import {
  registerDataTemplate,
  registerFormResponses,
} from '../../users/utils/utils';
import { validPassword } from '../../users/utils/Validation';
import { postRegister } from '../../utils/Fetch';

function DesignElement({
  displayElement,
  setDisplayElement,
  savedDesigns,
  openDesign,
  setOpenDesign,
}) {
  const { user } = useContext(UserContext);
  const [fileSaveName, setFileSaveName] = useState('untitled');
  const [userStories, setUserStories] = useState([]);
  const [colourPalette, setColourPalette] = useState(paletteTemplate);
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [fieldTypeConfirm, setFieldTypeConfirm] = useState('password');
  const [eyeIconConfirm, setEyeIconConfirm] = useState(OpenEye);
  const [registerForm, setRegisterForm] = useState(registerDataTemplate);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successRegisterUser, setSuccessRegisterUser] = useState('');
  const [formResponses, setFormResponses] = useState(registerFormResponses);

  const [hiddenPass, setHiddenPass] = useState('invisible h-4');
  const [hiddenEmail, setHiddenEmail] = useState('invisible h-4');

  const [inputStyle, setInputStyle] = useState('standard__inputs');

  let navigate = useNavigate();

  useEffect(() => {
    if (registerForm.password === registerForm.confirmPassword) {
      if (registerForm.password > 0) {
        setHiddenPass('block');
        setInputStyle('standard__inputs');
        setFormResponses((formResponses) => ({
          ...formResponses,
          password: true,
        }));
      }
    }
    if (
      registerForm.password !== registerForm.confirmPassword &&
      registerForm.confirmPassword > 3
    ) {
      setHiddenPass('block');
      setInputStyle('error__inputs');
      setFormResponses((formResponses) => ({
        ...formResponses,
        password: false,
      }));
    }
  }, [registerForm.password, registerForm.confirmPassword]);
  
  console.log('formResponses', formResponses);

  const login = () => {
    navigate('../login', { replace: true });
  };

  const checkHandler = (event) => {
    setAgreedToTerms(!agreedToTerms);
    setRegisterForm({
      ...registerForm,
      agreedToTerms: !agreedToTerms,
    });
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;

    if (registerForm.password.length > 8) {
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

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      setFormResponses({
        ...formResponses,
        passwordMatchError: true,
        password: false,
      });
      setHiddenPass('block');
      setInputStyle('error__inputs');
      return;
    }

    const checkPassword = validPassword(registerForm.password);

    if (checkPassword === false) {
      alert('Passwords too short');
      setFormResponses({
        ...formResponses,
        passwordLengthError: true,
      });

      return;
    }

    if (agreedToTerms !== true) {
      alert('Please check to agree to terms and conditons');
      setFormResponses({
        ...formResponses,
        agreedToTermsError: true,
      });
      return;
    }

    setFormResponses({
      passwordMatchError: true,
      passwordLengthError: true,
      agreedToTermsError: true,
    });

    const userData = registerForm;

    postRegister(userData, setSuccessRegisterUser, login);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('change', value);
    setFileSaveName(value);
  };

  const saveNewDesign = (event) => {
    event.preventDefault();
    if (user.email.length < 1) {
      return setDisplayElement('register');
    } else {
      client
        .post(`/designs/create`, openDesign)
        .then((res) => {
          console.log('res', res.data);
        })
        .catch((err) => console.error('Unable to get designs', err.response));
    }
  };

  return (
    <>
      <main className='lg:grid lg:grid-flow-col lg:w-full lg:pl-[200px]'>
        <div>
          <section className='bg-colour-pale p-2 flex justify-between gap-4 border-t-2 border-b-2 border-solid border-black lg:border-b-2 lg:border-t-0 lg:border-solid lg:border-black'>
            <div className='flex'>
              <input
                className='max-w-[150px] lg:max-w-[200px] px-1 font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
                type='text'
                name='fileName'
                id='fileName'
                placeholder={openDesign.name}
                onChange={handleChange}
              />
              <div className='group flex align-middle h-full pl-1'>
                <img
                  src={QuestionMark}
                  className='w-6 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                  alt='information'
                  data-te-animation-init
                />
                <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                  Enter a name to save your design with
                </div>
              </div>
            </div>

            {/* File Options */}
            <nav className='flex'>
              <ul className='flex gap-4 justify-center align-middle'>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full items-center'>
                    <img
                      src={NewFile}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='new design'
                    />
                  </div>
                  <p>New</p>
                </li>
                <li
                  onClick={saveNewDesign}
                  className='menu__link flex align-middle group'
                >
                  <div className='grid w-full items-center'>
                    <img
                      src={FloppyDisk}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='save design'
                    />
                  </div>
                  <p>Save</p>
                </li>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full items-center'>
                    <img
                      src={Undo}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='undo last change'
                    />
                  </div>
                  <p>Undo</p>
                </li>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full items-center'>
                    <img
                      src={Bin}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='delete design'
                    />
                  </div>
                  <p>Delete</p>
                </li>
              </ul>
            </nav>
          </section>
          <section className='overflow-x-hidden grid grid-rows-one min-h-[calc(100vh-104px)] p-2'>
            <div className='border-2 border-solid border-black rounded grid grid-rows-1'>
              {/* Register form */}
              {displayElement === 'register' && (
                <section>
                  <h2 className='text-center mt-2 text-2xl font-bold'>
                    To Save Your Design Please Register Now!
                  </h2>
                  <RegisterForm
                    handleRegister={handleRegister}
                    handleChange={handleRegisterChange}
                    hiddenEmail={hiddenEmail}
                    fieldType={fieldType}
                    inputStyle={inputStyle}
                    showPassword={showPassword}
                    setFieldType={setFieldType}
                    setEyeIcon={setEyeIcon}
                    fieldTypeConfirm={fieldTypeConfirm}
                    showConfirmPassword={showConfirmPassword}
                    setFieldTypeConfirm={setFieldTypeConfirm}
                    setEyeIconConfirm={setEyeIconConfirm}
                    eyeIcon={eyeIcon}
                    eyeIconConfirm={eyeIconConfirm}
                    hiddenPass={hiddenPass}
                    formResponses={formResponses}
                    agreedToTerms={agreedToTerms}
                    checkHandler={checkHandler}
                  />
                </section>
              )}
              {displayElement === 'nav' && (
                <NavOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'palette' && (
                <ColorPalette
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                  colourPalette={colourPalette}
                  setColourPalette={setColourPalette}
                />
              )}
              {displayElement === 'pages' && (
                <PageOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'components' && (
                <CompenentOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'user-stories' && (
                <UserStories
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                  userStories={userStories}
                  setUserStories={setUserStories}
                />
              )}
              {displayElement === 'buttons' && (
                <Buttons
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'saves' && (
                <SavedDesigns
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                  savedDesigns={savedDesigns}
                />
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DesignElement;
