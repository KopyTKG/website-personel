import React from "react";

function Modal(props: any) {
    return (
        <>
            <div id="modal" className="modal" ref={props.ModalRef} onClick={e => props.hideModal(e)}>
                <div className="card profile">
                    <div className="modal-close btn btn-error-outline" onClick={e => props.hideModal(e)}>
                        Close
                    </div>
                    <div className="text">
                        <div className="title">
                        About me.
                        </div>
                        <div className="body">
                        I’m Martin Kopecký, but i go by Kopy. I am {new Date().getFullYear() - 2001} year old weirdo from Czech republic, interested in Front-end development.
                        <br/>
                        <br/>
                        I'm a nerd that likes to play video games and build websites.
                        <br/>
                        <br/>
                        I’m interested in UI/UX development and creating smart user interface with awesome and rich experience for the user.
                        </div>
                        <div className="svg-profile">
                            <a href="https://github.com/kopytkg" target="_blank">
                                <Github/>
                            </a>
                            <a href="https://discord.gg/ZtjNUMHm8C" target="_blank">
                                <Discord/>
                            </a>
                        </div>
                    </div>
                    <div className="splash">
                        <div className="mask"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;

function Github(props: any) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "rgb(0%,0%,0%)",
      viewBox: "0 0 25 25",
      stroke: "currentColor",
      style: props.style,
      width: props.width,
      className: props.className,
      strokeWidth: 0
    })
    , /*#__PURE__*/React.createElement("path", {
      d: "M 8.648438 19.277344 C 8.480469 19.308594 8.40625 19.386719 8.429688 19.511719 C 8.449219 19.636719 8.542969 19.675781 8.710938 19.636719 C 8.875 19.59375 8.949219 19.519531 8.929688 19.417969 C 8.90625 19.300781 8.8125 19.253906 8.648438 19.277344 Z M 8.648438 19.277344 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 7.757812 19.402344 C 7.589844 19.402344 7.507812 19.457031 7.507812 19.574219 C 7.507812 19.707031 7.597656 19.765625 7.773438 19.746094 C 7.941406 19.746094 8.023438 19.6875 8.023438 19.574219 C 8.023438 19.4375 7.933594 19.378906 7.757812 19.402344 Z M 7.757812 19.402344 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 6.539062 19.355469 C 6.5 19.46875 6.566406 19.546875 6.742188 19.589844 C 6.898438 19.652344 6.996094 19.621094 7.039062 19.496094 C 7.070312 19.378906 7.003906 19.296875 6.835938 19.246094 C 6.679688 19.203125 6.582031 19.238281 6.539062 19.355469 Z M 6.539062 19.355469 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 22.65625 1.320312 C 21.777344 0.441406 20.71875 0 19.480469 0 L 4.496094 0 C 3.257812 0 2.199219 0.441406 1.320312 1.320312 C 0.441406 2.199219 0 3.257812 0 4.496094 L 0 19.480469 C 0 20.71875 0.441406 21.777344 1.320312 22.65625 C 2.199219 23.535156 3.257812 23.976562 4.496094 23.976562 L 7.992188 23.976562 C 8.21875 23.976562 8.390625 23.96875 8.507812 23.953125 C 8.621094 23.9375 8.734375 23.867188 8.851562 23.75 C 8.964844 23.628906 9.019531 23.453125 9.019531 23.226562 C 9.019531 23.195312 9.019531 22.839844 9.011719 22.164062 C 9.007812 21.488281 9.003906 20.953125 9.003906 20.554688 L 8.648438 20.617188 C 8.417969 20.660156 8.128906 20.679688 7.78125 20.671875 C 7.433594 20.667969 7.070312 20.632812 6.695312 20.5625 C 6.320312 20.496094 5.972656 20.339844 5.648438 20.097656 C 5.328125 19.851562 5.097656 19.53125 4.964844 19.136719 L 4.808594 18.777344 C 4.703125 18.539062 4.539062 18.273438 4.316406 17.980469 C 4.089844 17.691406 3.867188 17.492188 3.636719 17.386719 L 3.527344 17.308594 C 3.453125 17.257812 3.386719 17.195312 3.324219 17.121094 C 3.261719 17.050781 3.214844 16.976562 3.183594 16.902344 C 3.152344 16.832031 3.179688 16.769531 3.261719 16.722656 C 3.34375 16.675781 3.496094 16.652344 3.714844 16.652344 L 4.027344 16.699219 C 4.234375 16.742188 4.492188 16.867188 4.800781 17.074219 C 5.105469 17.285156 5.359375 17.554688 5.554688 17.886719 C 5.796875 18.3125 6.085938 18.636719 6.421875 18.863281 C 6.761719 19.085938 7.101562 19.199219 7.445312 19.199219 C 7.789062 19.199219 8.085938 19.171875 8.335938 19.121094 C 8.585938 19.066406 8.816406 18.988281 9.035156 18.886719 C 9.128906 18.1875 9.386719 17.652344 9.800781 17.277344 C 9.207031 17.214844 8.675781 17.121094 8.203125 16.996094 C 7.726562 16.871094 7.238281 16.667969 6.734375 16.386719 C 6.230469 16.105469 5.8125 15.757812 5.476562 15.34375 C 5.144531 14.925781 4.871094 14.378906 4.660156 13.703125 C 4.445312 13.027344 4.339844 12.246094 4.339844 11.363281 C 4.339844 10.101562 4.75 9.03125 5.570312 8.148438 C 5.1875 7.199219 5.222656 6.136719 5.679688 4.960938 C 5.984375 4.867188 6.429688 4.9375 7.023438 5.171875 C 7.617188 5.40625 8.050781 5.609375 8.328125 5.773438 C 8.601562 5.941406 8.824219 6.082031 8.992188 6.195312 C 9.957031 5.925781 10.957031 5.789062 11.988281 5.789062 C 13.015625 5.789062 14.015625 5.925781 14.984375 6.195312 L 15.578125 5.820312 C 15.984375 5.570312 16.460938 5.34375 17.011719 5.132812 C 17.566406 4.925781 17.988281 4.867188 18.277344 4.960938 C 18.746094 6.140625 18.789062 7.199219 18.402344 8.148438 C 19.222656 9.03125 19.636719 10.101562 19.636719 11.363281 C 19.636719 12.246094 19.527344 13.03125 19.316406 13.710938 C 19.101562 14.394531 18.828125 14.9375 18.488281 15.351562 C 18.152344 15.761719 17.730469 16.105469 17.222656 16.386719 C 16.71875 16.667969 16.230469 16.871094 15.757812 16.996094 C 15.285156 17.121094 14.75 17.214844 14.15625 17.277344 C 14.699219 17.746094 14.96875 18.484375 14.96875 19.496094 L 14.96875 23.226562 C 14.96875 23.402344 14.996094 23.546875 15.046875 23.652344 C 15.097656 23.761719 15.183594 23.839844 15.296875 23.878906 C 15.410156 23.921875 15.511719 23.949219 15.601562 23.957031 C 15.691406 23.96875 15.816406 23.972656 15.984375 23.972656 L 19.480469 23.972656 C 20.71875 23.972656 21.777344 23.535156 22.65625 22.65625 C 23.535156 21.777344 23.972656 20.71875 23.972656 19.480469 L 23.972656 4.496094 C 23.972656 3.257812 23.535156 2.199219 22.65625 1.320312 Z M 22.65625 1.320312 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 4.746094 17.449219 C 4.671875 17.503906 4.683594 17.585938 4.777344 17.699219 C 4.878906 17.804688 4.964844 17.820312 5.027344 17.746094 C 5.097656 17.695312 5.089844 17.613281 4.996094 17.496094 C 4.890625 17.402344 4.808594 17.386719 4.746094 17.449219 Z M 4.746094 17.449219 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 4.230469 17.058594 C 4.199219 17.132812 4.234375 17.195312 4.339844 17.246094 C 4.421875 17.300781 4.492188 17.289062 4.542969 17.214844 C 4.574219 17.144531 4.535156 17.082031 4.433594 17.027344 C 4.328125 16.996094 4.261719 17.007812 4.230469 17.058594 Z M 4.230469 17.058594 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 5.230469 18.058594 C 5.136719 18.109375 5.136719 18.203125 5.230469 18.339844 C 5.324219 18.476562 5.410156 18.511719 5.496094 18.449219 C 5.589844 18.375 5.589844 18.277344 5.496094 18.152344 C 5.410156 18.015625 5.324219 17.984375 5.230469 18.058594 Z M 5.230469 18.058594 "
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 5.773438 18.761719 C 5.683594 18.84375 5.703125 18.941406 5.835938 19.058594 C 5.960938 19.183594 6.066406 19.199219 6.148438 19.105469 C 6.234375 19.019531 6.210938 18.921875 6.085938 18.808594 C 5.960938 18.683594 5.859375 18.667969 5.773438 18.761719 Z M 5.773438 18.761719 "
    }));
}

function Discord(props: any) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 25",
      stroke: "currentColor",
      width: props.width,
      className: props.className,
      strokeWidth: 0.4
    })
    , /*#__PURE__*/React.createElement("path", {
      fill: "rgb(36.078431%,41.960784%,75.294118%)",
      d: "M 3.578125 21.195312 L 17.839844 21.195312 L 17.15625 18.992188 C 17.257812 19.078125 23 24 23 24 L 23 2.476562 C 22.933594 1.136719 21.78125 0 20.351562 0 L 3.585938 0.00390625 C 2.15625 0.00390625 1 1.140625 1 2.480469 L 1 18.71875 C 1 20.132812 2.15625 21.195312 3.578125 21.195312 Z M 14.128906 5.683594 L 14.09375 5.695312 L 14.105469 5.683594 Z M 6.496094 6.953125 C 8.328125 5.617188 10.027344 5.683594 10.027344 5.683594 L 10.164062 5.816406 C 7.921875 6.351562 6.90625 7.355469 6.90625 7.355469 C 7.011719 7.332031 11.539062 4.71875 17.027344 7.421875 C 17.027344 7.421875 16.007812 6.484375 13.902344 5.882812 L 14.089844 5.699219 C 14.378906 5.699219 15.921875 5.753906 17.566406 6.960938 C 17.566406 6.960938 19.410156 10.109375 19.410156 13.980469 C 19.351562 13.90625 18.269531 15.644531 15.480469 15.707031 C 15.480469 15.707031 15.007812 15.171875 14.671875 14.707031 C 16.304688 14.238281 16.914062 13.300781 16.914062 13.300781 C 13.738281 15.300781 10.960938 14.988281 7.632812 13.636719 C 7.601562 13.636719 7.585938 13.625 7.570312 13.609375 L 7.570312 13.601562 C 7.554688 13.585938 7.539062 13.570312 7.511719 13.570312 L 7.449219 13.570312 C 7.246094 13.4375 7.109375 13.371094 7.109375 13.371094 C 7.109375 13.371094 7.71875 14.308594 9.285156 14.777344 C 8.871094 15.246094 8.464844 15.777344 8.464844 15.777344 C 5.679688 15.710938 4.664062 13.972656 4.664062 13.972656 C 4.664062 10.097656 6.496094 6.953125 6.496094 6.953125 Z M 6.496094 6.953125 "
    }), /*#__PURE__*/React.createElement("path", {
      fill: "rgb(36.078431%,41.960784%,75.294118%)",
      d: "M 14.308594 12.769531 C 15.019531 12.769531 15.597656 12.171875 15.597656 11.429688 C 15.597656 10.695312 15.023438 10.097656 14.308594 10.097656 C 13.601562 10.097656 13.019531 10.695312 13.019531 11.4375 C 13.019531 12.171875 13.597656 12.769531 14.308594 12.769531 Z M 14.308594 12.769531 "
    }),/*#__PURE__*/React.createElement("path", {
      fill: "rgb(36.078431%,41.960784%,75.294118%)",
      d: "M 9.691406 12.769531 C 10.402344 12.769531 10.980469 12.171875 10.980469 11.429688 C 10.980469 10.695312 10.40625 10.097656 9.695312 10.097656 L 9.691406 10.097656 C 8.980469 10.097656 8.398438 10.695312 8.398438 11.4375 C 8.398438 12.171875 8.980469 12.769531 9.691406 12.769531 Z M 9.691406 12.769531"
    }));
}
  