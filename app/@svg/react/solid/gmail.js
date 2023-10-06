const React = require("react");

function Gmail(props, {width}) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 25",
    stroke: "currentColor",
    width: props.width,
    className: props.className,
    strokeWidth: 0.2
  }), /*#__PURE__*/React.createElement("path", {
    fill:"rgb(92.54902%,93.72549%,94.509804%)",
    d: "M 3 3 L 21 3 L 21 21 L 3 21 Z M 3 3 "
  }), /*#__PURE__*/React.createElement("path", {
    fill: "rgb(81.176471%,84.705882%,86.27451%)",
    d: "M 12 13.894531 L 21 21 L 21 6.96875 Z M 12 13.894531 "
  }), /*#__PURE__*/React.createElement("path", {
    fill: "rgb(95.686275%,26.27451%,21.176471%)",
    d: "M 21.75 3 L 21 3 L 12 10.105469 L 3 3 L 2.25 3 C 1.007812 3 0 4.007812 0 5.25 L 0 18.75 C 0 19.992188 1.007812 21 2.25 21 L 3 21 L 3 6.96875 L 12 13.890625 L 21 6.96875 L 21 21 L 21.75 21 C 22.992188 21 24 19.992188 24 18.75 L 24 5.25 C 24 4.007812 22.992188 3 21.75 3 Z M 21.75 3 "
  }));
}

module.exports = Gmail;
