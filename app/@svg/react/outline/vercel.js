const React = require("react");

function Vercel(props, {width}) {
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
    d: "M 24 23.238281 L 0 23.238281 L 12 0.761719 Z M 24 23.238281 "
  }));
}

module.exports = Vercel;