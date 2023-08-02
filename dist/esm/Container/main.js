import React, { memo, useMemo } from 'react';
import "./Layout.module.less";
// export const MenuContext = createContext<IMenuContext>({index: '0'})
var Main = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    width = props.width,
    height = props.height;
  var mainSize = useMemo(function () {
    var size = {
      width: '100%',
      height: '400px'
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "main",
    style: mainSize
  }, children);
});
Main.displayName = 'Main';
export default Main;