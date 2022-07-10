const React = require("react");

function Twitch(props, {width}) {
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
    d: "M 0.976562 4.175781 L 0.976562 20.867188 L 6.722656 20.867188 L 6.722656 24 L 9.863281 24 L 12.996094 20.867188 L 17.703125 20.867188 L 23.976562 14.609375 L 23.976562 0 L 2.542969 0 Z M 4.632812 2.085938 L 21.886719 2.085938 L 21.886719 13.5625 L 18.226562 17.214844 L 12.472656 17.214844 L 9.339844 20.34375 L 9.339844 17.214844 L 4.632812 17.214844 Z M 4.632812 2.085938 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.386719 6.261719 L 12.476562 6.261719 L 12.476562 12.523438 L 10.386719 12.523438 Z M 10.386719 6.261719 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.132812 6.261719 L 18.222656 6.261719 L 18.222656 12.523438 L 16.132812 12.523438 Z M 16.132812 6.261719 "
  }));
}

module.exports = Twitch;