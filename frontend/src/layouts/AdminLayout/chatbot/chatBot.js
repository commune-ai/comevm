import React from 'react';
import { useState } from 'react';
import { Bounce } from 'react-reveal';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Messages from '../NavBar/NavRight/ChatList/Friends/Chat/Messages';
import chatbotImg from '../../../assets/images/ChatBot.svg';

function ChatBot() {
  const [isShowChatbotClicked, setIsShowChatbotClicked] = useState(false);

  const openChatbot = () => {
    setIsShowChatbotClicked(true);
  };
  const closeChatbot = () => {
    setIsShowChatbotClicked(false);
  };

  const msg = {
    type: 1,
    msg: 'Hi! How can I assist you today?',
    time: '8:20 a.m'
  };
  const msg1 = {
    type: 0,
    msg: 'Hi! How can I assist you today?',
    time: '8:20 a.m'
  };

  return (
    <div>
      <div onClick={openChatbot} className="fixed tw-right-8 tw-bottom-8 tw-cursor-pointer">
        <img className=" tw-w-[120px]" src={chatbotImg} alt="" />
      </div>
      <Bounce bottom>
        <div
          className={isShowChatbotClicked ? `header-chat tw-fixed chatbot` : `header-chat tw-hidden chatbot`}
          style={{ right: '100px', height: '600px', top: '200px' }}
        >
          {/* <div className='header-chat tw-fixed' style={ {right:'0px'}}> */}
          <div className="h-list-header">
            <h6>Welcome to Chatbot</h6>
            <div onClick={closeChatbot} className="h-back-user-list tw-cursor-pointer">
              <i className="feather icon-chevron-left text-muted" />
            </div>
          </div>
          <div className="h-list-body" style={{ height: '91%' }}>
            <div className="main-chat-cont">
              <PerfectScrollbar>
                <div className="main-friend-chat">
                  <Messages message={msg} name="Ninja" photo="avatar-1.jpg" />
                  <Messages message={msg1} name="Ninja" photo="avatar-1.jpg" />
                </div>
              </PerfectScrollbar>
            </div>
          </div>
          <div className="h-list-footer">
            <InputGroup>
              <Button variant="success" className="btn-attach">
                <i className="feather icon-paperclip" />
              </Button>
              <FormControl type="text" name="h-chat-text" className="h-send-chat" placeholder="Write hear . . " />
              <Button type="submit" className="input-group-append btn-send">
                <i className="feather icon-message-circle" />
              </Button>
            </InputGroup>
          </div>
        </div>
      </Bounce>
    </div>
  );
}

export default ChatBot;
