import React from 'react';
import Container from '..';
import Aside from "../aside";
import Main from "../main";
export default function index1() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Aside, {
    height: 500
  }, "\u6211\u662FAside"), /*#__PURE__*/React.createElement(Main, {
    height: 500
  }, "\u6211\u662FMain"));
}