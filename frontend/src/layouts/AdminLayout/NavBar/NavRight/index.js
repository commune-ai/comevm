import React, { useState } from 'react';
import { Card, ListGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Switcher from '../../../../switcher';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import ChatList from './ChatList';

import avatar1 from '../../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../../assets/images/user/avatar-4.jpg';

const NavRight = () => {
  const [listOpen, setListOpen] = useState(false);
  // const [isconnected, setIsconnected] = React.useState(false);

  const notiData = [
    {
      name: 'Joseph William',
      image: avatar2,
      details: 'Purchase New Theme and make payment',
      activity: '30 min'
    },
    {
      name: 'Sara Soudein',
      image: avatar3,
      details: 'currently login',
      activity: '30 min'
    },
    {
      name: 'Suzen',
      image: avatar4,
      details: 'Purchase New Theme and make payment',
      activity: 'yesterday'
    }
  ];

  return (
    <React.Fragment>
      <ListGroup
        as="ul"
        bsPrefix=" "
        className="navbar-nav ml-auto"
        id="navbar-right"
        style={{ display: 'flex', marginTop: '10px', justifyContent: 'center', alignItems: 'center' }}
      >
        <ListGroup.Item as="li" className=" -tw-mt-[8px] tw-flex tw-justify-center tw-items-center switcher tw-mr-3">
          <Switcher />
        </ListGroup.Item>
        <ListGroup.Item as="li" bsPrefix=" " className="">
          <Dropdown align="start">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <i className="feather icon-bell lg:dark:tw-text-white icon tw-text-[17px] sm:tw-text-[25px]" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="notification notification-scroll">
              <div className="noti-head">
                <h6 className="d-inline-block m-b-0">Notifications</h6>
                <div className="float-end">
                  <Link to="#" className="me-2">
                    mark as read
                  </Link>
                  <Link to="#">clear all</Link>
                </div>
              </div>
              <PerfectScrollbar>
                <ListGroup as="ul" bsPrefix=" " variant="flush" className="noti-body">
                  <ListGroup.Item as="li" bsPrefix=" " className="n-title">
                    <p className="m-b-0">NEW</p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    <Card
                      className="d-flex align-items-center shadow-none mb-0 p-0"
                      style={{ flexDirection: 'row', backgroundColor: 'unset' }}
                    >
                      <img className="img-radius" src={avatar1} alt="Generic placeholder" />
                      <Card.Body className="p-0">
                        <p>
                          <strong>John Doe</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock me-2" />
                            30 min
                          </span>
                        </p>
                        <p>New ticket Added</p>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="n-title">
                    <p className="m-b-0">EARLIER</p>
                  </ListGroup.Item>
                  {notiData.map((data, index) => {
                    return (
                      <ListGroup.Item key={index} as="li" bsPrefix=" " className="notification">
                        <Card
                          className="d-flex align-items-center shadow-none mb-0 p-0"
                          style={{ flexDirection: 'row', backgroundColor: 'unset' }}
                        >
                          <img className="img-radius" src={data.image} alt="Generic placeholder" />
                          <Card.Body className="p-0">
                            <p>
                              <strong>{data.name}</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock me-2" />
                                {data.activity}
                              </span>
                            </p>
                            <p>{data.details}</p>
                          </Card.Body>
                        </Card>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </PerfectScrollbar>
              <div className="noti-footer">
                <Link to="#">show all</Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown>
            <Dropdown.Toggle as={Link} variant="link" to="#" className="displayChatbox" onClick={() => setListOpen(true)}>
              <i className="icon feather icon-mail tw-text-[17px] sm:tw-text-[25px] lg:dark:tw-text-white" />
            </Dropdown.Toggle>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item as="li" bsPrefix=" " className=" tw-h-full tw-flex">
          {/* <div> */}
          <ConnectButton.Custom>
            {({ account, chain, openChainModal, openConnectModal,openAccountModal, authenticationStatus, mounted }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none'
                    }
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div className=" tw-flex tw-gap-[4px] tw-justify-center tw-items-center -tw-mt-[9px] " onClick={openConnectModal}>
                          <svg
                            className="sm:tw-h-8 sm:tw-w-8 tw-h-4 tw-w-4 tw-text-[#3f4d67] signinBut dark:tw-text-[white] tw-cursor-pointer"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{' '}
                            <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                          </svg>
                          <button
                            className="dark:tw-text-white signinBut tw-text-[#3f4d67] tw-text-[18px] sm:tw-text-base md:tw-text-[18px] md:tw-block tw-hidden tw-transition-all tw-evermore hover:tw-opacity-[0.7] tw-no-underline tw-rounded-full dark:hover:tw-text-white hover:tw-text-blue-800"
                            style={{ fontFamily: 'Smack' }}
                          >
                            SignIn
                          </button>
                        </div>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} style={{ boxShadow: 'rgb(0 0 0 / 98%) 3px 3px 3px 3px' }}>
                          Wrong network
                        </button>
                      );
                    }
                    // if (connected) {
                    //   setIsconnected(true);
                    //   setPubkey(account.displayName);
                    // }
                    return (
                      <div className='tw-flex tw-justify-center tw-items-center'>
                        <div className=" tw-flex tw-gap-[15px] tw-justify-center tw-items-center -tw-mt-[10px] walletinfo">
                          {/* <svg class="h-8 w-8 text-[#256fc4] dark:text-[white]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                          <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                            SignOut
                          </button> */}
                          
                          <div
                            className="tw-align-middle tw-select-none tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-2 tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-cursor-pointer tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-1"
                            onClick={openChainModal}
                            style={{ fontFamily: 'Smack' }}
                          >
                            <span>
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} className=" tw-w-[25px] tw-h-[25px]" />
                                  )}
                                </div>
                              )}
                            </span>
                            <span className=" tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                              {chain.name}
                            </span>
                            <svg
                              className="tw-h-5 tw-w-5 tw-text-[rgb(18,18,18)] dark:tw-text-white"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {' '}
                              <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                          <div
                            className="tw-align-middle tw-select-none tw-cursor-pointer tw-font-sans tw-font-bold tw-text-center tw-uppercase tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-text-xs tw-py-[10px] tw-px-3 tw-rounded-lg tw-bg-gradient-to-tr tw-from-[#ffffff] dark:tw-from-[rgb(27,27,27)] dark:tw-to-[rgb(27,27,27)] tw-to-[#dedede] tw-text-[rgb(18,18,18)] dark:tw-text-white tw-shadow-md tw-shadow-gray-900/10 hover:tw-shadow-lg hover:tw-shadow-gray-900/20 active:tw-opacity-[0.85] tw-flex tw-items-center tw-gap-2"
                            onClick={openAccountModal}
                            style={{ fontFamily: 'Smack' }}
                          >
                            <span className=" tw-text-[15px] tw-uppercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                              {account.displayBalance ? account.displayBalance : ''}
                            </span>
                            <span className=" tw-text-[15px] first-letter:tw-uppercase tw-lowercase tw-text-[rgb(18,18,18)] dark:tw-text-white">
                              {account.displayName}
                            </span>
                            <svg
                              className="tw-h-5 tw-w-5 tw-text-[rgb(18,18,18)] dark:tw-text-white"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {' '}
                              <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                        <Dropdown align="center" className="drp-user tw-h-full tw-flex">
                          <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic" className="tw-h-full tw-flex ">
                            <i className="icon feather icon-settings tw-hidden tw-text-[17px] sm:tw-text-[25px]" id="setting_icon" />
                            <img src={avatar1} className="img-radius tw-w-[60px] feather icon" id="setting_img" alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu align="end" className="profile-notification">
                            <div className="pro-head">
                              <img src={avatar1} className="img-radius" alt="User Profile" />
                              <span>John Doe</span>
                              <Link to="#" className="dud-logout" title="Logout">
                                <i className="feather icon-log-out" />
                              </Link>
                            </div>
                            <ListGroup as="ul" bsPrefix=" " variant="flush" className="pro-body">
                              <ListGroup.Item as="li" bsPrefix=" ">
                                <Link to="#" className="dropdown-item">
                                  <i className="feather icon-user" /> Profile
                                </Link>
                              </ListGroup.Item>
                              <ListGroup.Item as="li" bsPrefix=" ">
                                <Link to="#" className="dropdown-item">
                                  <i className="feather icon-mail" /> My Messages
                                </Link>
                              </ListGroup.Item>
                              <ListGroup.Item as="li" bsPrefix=" ">
                                <Link to="#" className="dropdown-item">
                                  <i className="feather icon-settings" /> Settings
                                </Link>
                              </ListGroup.Item>
                              <ListGroup.Item as="li" bsPrefix=" ">
                                <Link to="#" className="dropdown-item">
                                  <i className="feather icon-lock" /> Lock Screen
                                </Link>
                              </ListGroup.Item>
                              <ListGroup.Item as="li" bsPrefix=" ">
                                <Link to="#" className="dropdown-item">
                                  <i className="feather icon-log-out" /> Logout
                                </Link>
                              </ListGroup.Item>
                            </ListGroup>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          {/* </div> */}
        </ListGroup.Item>
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </React.Fragment>
  );
};

export default NavRight;
