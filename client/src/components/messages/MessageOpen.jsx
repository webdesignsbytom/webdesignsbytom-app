import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { statusResults } from '../../users/utils/utils';
import client from '../../utils/axios/client';
import { messageTemplate } from '../../utils/utils';
import Navbar from '../nav/Navbar';
import { SubmitButton } from '../utils/SubmitButtons';

function MessageOpen() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    subject,
    content,
    viewed,
    starred,
    createdAt,
    sentFromId,
    sentFromName,
    userId,
  } = location.state;
  // Message
  const [messageData, setMessageData] = useState(messageTemplate);
  // Send
  const [postMessageLoadingAnimation, setPostMessageLoadingAnimation] = useState(false);
  const [postMessageButtonContent, setpostMessageButtonContent] = useState(true);
  const [postMessageResponseMessage, setPostMessageResponseMessage] = useState(statusResults);
  //
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostMessageResponseMessage(statusResults)
    setMessageData({
      ...messageData,
      [name]: value,
    });
  };

  const handleSendMessage = (event) => {
    event.preventDefault()
    setPostMessageLoadingAnimation(true)
    console.log('send message');
    console.log('message', messageData)
    messageData.sentFromName = user.firstName + ' ' + user.lastName
    messageData.sentFromId = user.id
    messageData.subject = subject
    messageData.userId = sentFromId

    client
    .post(`/messages/create`, messageData, false)
      .then((res) => {
        console.log('res', res.data);
        setPostMessageLoadingAnimation(false);
        setMessageData(messageTemplate)
        setPostMessageResponseMessage({
          status: true,
          result: 'success',
          message: 'SUCCESS',
        });
      })
      .catch((err) => {
        setLoadingAnimation(false);
        setPostMessageResponseMessage({
          status: true,
          result: 'failed',
          message: err.response.data.data.message,
        });
        console.error(
          'Unable to send message',
          err.response.data.data.message
        );
      });
  };

  return (
    <div className='grid lg:grid-rows-reg bg-white dark:bg-black lg:h-screen lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      {/* Main lg:max-h-[calc(100vh-64px)]  */}
      <main className='bg-green-400 grid'>
        <section className='bg-red-400 grid grid-rows-3x overflow-hidden border-2 border-solid border-black rounded m-4'>
          <section className='grid p-2'>
            <section className='grid grid-rows-a1a border-2 border-solid border-black overflow-hidden rounded'>
              <article className='flex justify-between border-b-2 border-solid border-black p-2'>
                <h3>From: {sentFromName}</h3>
                <h3>Date recieved: {createdAt}</h3>
              </article>
              <article className='bg-white dark:bg-black text-black dark:text-white p-2'>
                {content}
              </article>
              <article className='flex justify-between border-t-2 border-solid border-black overflow-hidden p-2'>
                <h6>Attachments: none</h6>
                <h6>{sentFromId}</h6>
              </article>
            </section>
          </section>
          <section className='grid border-t-2 border-solid border-black overflow-hidden p-2'>
            <form
              className='overflow-hidden rounded grid gap-2 grid-cols-3x'
            >
              <div className='border-2 border-solid border-black overflow-hidden rounded'>
                <textarea
                  onChange={handleChange}
                  name='content'
                  id='content'
                  className='w-full h-full resize-none py-1 px-2'
                ></textarea>
              </div>
              <div className='grid border-2 border-solid border-black overflow-hidden rounded'>
                <div>
                  <SubmitButton
                    loadingAnimation={loadingAnimation}
                    mainButtonContent={mainButtonContent}
                    responseMessage={updateResponseMessage}
                    buttonMessage='Save Message'
                    spinnerHeight='h-5'
                    spinnerWidth='w-5'
                    action={handleSendMessage}
                  />
                </div>
                <div>
                  <SubmitButton
                    loadingAnimation={loadingAnimation}
                    mainButtonContent={mainButtonContent}
                    responseMessage={updateResponseMessage}
                    buttonMessage='Delete Message'
                    spinnerHeight='h-5'
                    spinnerWidth='w-5'
                    action={handleSendMessage}
                  />
                </div>
                <div>
                  <SubmitButton
                    loadingAnimation={postMessageLoadingAnimation}
                    mainButtonContent={postMessageButtonContent}
                    responseMessage={postMessageResponseMessage}
                    buttonMessage='Send Message'
                    spinnerHeight='h-5'
                    spinnerWidth='w-5'
                    action={handleSendMessage}
                  />
                </div>
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}

export default MessageOpen;
