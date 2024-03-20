import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import { Bounce } from 'react-reveal';

import useWindowSize from '../../hooks/useWindowSize';
import useOutsideClick from '../../hooks/useOutsideClick';
import { ConfigContext } from '../../contexts/ConfigContext';
import * as actionType from '../../store/actions';
import chatbotImg from '../../assets/images/ChatBot.svg';
import Messages from './NavBar/NavRight/ChatList/Friends/Chat/Messages';

const AdminLayout = ({ children }) => {
  const windowSize = useWindowSize();
  const ref = useRef();
  const configContext = useContext(ConfigContext);
  const [isShowChatbotClicked, setIsShowChatbotClicked] = useState(false);
  const { collapseMenu, headerFixedLayout } = configContext.state;
  const { dispatch } = configContext;

  useEffect(() => {
    if (windowSize.width > 992 && windowSize.width <= 1024) {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }

    if (windowSize.width < 992) {
      dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
    }
  }, [dispatch, windowSize]);

  useOutsideClick(ref, () => {
    if (collapseMenu) {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }
  });

  const mobileOutClickHandler = () => {
    if (windowSize.width < 992 && collapseMenu) {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }
  };

  let mainClass = ['pcoded-wrapper'];

  let common = (
    <React.Fragment>
      <Navigation />
      <NavBar />
    </React.Fragment>
  );

  let mainContainer = (
    <React.Fragment>
      <div className="pcoded-main-container dark:tw-bg-[rgb(18,18,18)] ">
        <div className={mainClass.join(' ')}>
          <div className="pcoded-content tw-px-0 tw-pb-0 tw-overflow-x-hidden dark:tw-bg-[rgb(18,18,18)] ">
            <div className="pcoded-inner-content">
              <Breadcrumb />
              {children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  const msg = {
    type: 1,
    msg: 'Hi! How can I assist you today?',
    time: '8:20 a.m'
  };

  if (windowSize.width < 992) {
    let outSideClass = ['nav-outside'];
    if (collapseMenu) {
      outSideClass = [...outSideClass, 'mob-backdrop'];
    }
    if (headerFixedLayout) {
      outSideClass = [...outSideClass, 'mob-fixed'];
    }

    common = (
      <div className={outSideClass.join(' ')} ref={ref}>
        {common}
      </div>
    );

    mainContainer = (
      <div
        role="button"
        tabIndex="0"
        className="pcoded-outside "
        onClick={() => mobileOutClickHandler}
        onKeyDown={() => mobileOutClickHandler}
      >
        {mainContainer}
      </div>
    );
  }
  const openChatbot = () => {
    setIsShowChatbotClicked(true);
  };
  const closeChatbot = () => {
    setIsShowChatbotClicked(false);
  };
  return (
    <React.Fragment>
      {common}
      {mainContainer}
      <div>
        <div onClick={openChatbot} className="fixed tw-right-8 tw-bottom-8 tw-cursor-pointer">
          <img className=" tw-w-[120px]" src={chatbotImg} alt="" />
        </div>
        <Bounce bottom>
          <div className={isShowChatbotClicked ? `header-chat tw-fixed chatbot` : `header-chat tw-hidden chatbot`} style={{ right: '100px',height:'600px',top:'200px' }}>
            {/* <div className='header-chat tw-fixed' style={ {right:'0px'}}> */}
            <div className="h-list-header">
              <h6>Welcome to Chatbot</h6>
              <div onClick={closeChatbot} className="h-back-user-list tw-cursor-pointer">
                <i className="feather icon-chevron-left text-muted" />
              </div>
            </div>
            <div className="h-list-body" style={{height:'91%'}}>
              <div className="main-chat-cont">
                <PerfectScrollbar>
                  <div className="main-friend-chat">
                    <Messages message={msg} name="Ninja" photo="chatbot.png" />
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
    </React.Fragment>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node
};
export default AdminLayout;
