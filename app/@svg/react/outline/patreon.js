const React = require("react");

function Patreon(props, {width}) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 25",
    stroke: "currentColor",
    width: props.width,
    className: props.className,
    strokeWidth: 1
  })
  , /*#__PURE__*/React.createElement("path", {
    d: "M 19.5 24 L 4.5 24 C 2.015625 24 0 21.984375 0 19.5 L 0 4.5 C 0 2.015625 2.015625 0 4.5 0 L 19.5 0 C 21.984375 0 24 2.015625 24 4.5 L 24 19.5 C 24 21.984375 21.984375 24 19.5 24 Z M 19.5 24 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6 6.25 L 8.109375 6.25 L 8.109375 17.75 L 6 17.75 Z M 6 6.25 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.691406 6.25 C 11.308594 6.25 9.371094 8.1875 9.371094 10.566406 C 9.371094 12.941406 11.308594 14.871094 13.691406 14.871094 C 16.070312 14.871094 18 12.9375 18 10.566406 C 18 8.1875 16.070312 6.25 13.691406 6.25 Z M 13.691406 6.25 "
  }));
}

module.exports = Patreon;