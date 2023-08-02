import React, { memo, useMemo } from 'react';
import "./Layout.module.less";
// export const MenuContext = createContext<IMenuContext>({index: '0'})
var Footer = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    width = props.width,
    height = props.height;
  var FooterSize = useMemo(function () {
    var size = {
      width: '100%',
      height: '100px'
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
    className: "footer",
    style: FooterSize
  }, children);
});
Footer.displayName = 'Footer';
export default Footer;