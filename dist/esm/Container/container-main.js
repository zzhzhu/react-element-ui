import React, { memo, useMemo } from 'react';
import "./Layout.module.less";
// export const MenuContext = createContext<IMenuContext>({index: '0'})
var ContainerMain = /*#__PURE__*/memo(function (props) {
  var children = props.children,
    width = props.width,
    height = props.height;
  console.log(children);
  var ContainerMainSize = useMemo(function () {
    var size = {
      width: '100%',
      height: '100%'
    };
    return size;
  }, [width, height]);
  return /*#__PURE__*/React.createElement("div", {
    style: ContainerMainSize,
    className: "layoutMain"
  }, children);
});
ContainerMain.displayName = 'ContainerMain';
export default ContainerMain;