import React, { memo, useMemo } from 'react';
import "./Layout.module.less";
// export const MenuContext = createContext<IMenuContext>({index: '0'})
var Aside = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    width = props.width,
    height = props.height;
  var asideSize = useMemo(function () {
    var size = {
      width: '200px',
      height: '500px'
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
    style: asideSize,
    className: "aside"
  }, children);
});
Aside.displayName = 'Aside';
export default Aside;