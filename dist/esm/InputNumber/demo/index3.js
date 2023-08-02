import React from 'react';
import InputNumber from "../index";
export default function InputNumberDemo1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement(InputNumber, {
    max: 10,
    value: 1,
    min: 0,
    controlsPosition: "center",
    disabled: true
  }), /*#__PURE__*/React.createElement(InputNumber, {
    max: 10,
    value: 1,
    min: 0,
    controlsPosition: "left",
    disabled: true
  }), /*#__PURE__*/React.createElement(InputNumber, {
    max: 10,
    value: 1,
    min: 0,
    controlsPosition: "rigth",
    disabled: true
  }));
}