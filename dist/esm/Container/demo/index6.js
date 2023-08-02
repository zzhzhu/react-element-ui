import React from 'react';
import Container from '..';
import Aside from "../aside";
import Main from "../main";
import ContainerMain from "../container-main";
import Header from "../header";
import Footer from "../footer";
export default function index1() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Aside, {
    height: 500
  }, "\u6211\u662FAside"), /*#__PURE__*/React.createElement(ContainerMain, null, /*#__PURE__*/React.createElement(Header, null, "\u6211\u662FHeader"), /*#__PURE__*/React.createElement(Main, {
    height: 300
  }, "\u6211\u662FMain"), /*#__PURE__*/React.createElement(Footer, null, "\u6211\u662FFooter")));
}