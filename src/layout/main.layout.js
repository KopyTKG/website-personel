import { useState, useEffect, useRef } from "react";
import Background from "../components/background";
import Logo from "../components/svg/logo.svg";
import Parallax from '../middleware/parallax';
import Signpost from "./../assets/img/signpost.png"

const Layout = (props) => {
    const Modal = useRef();
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    const showModal = e => {
        let modal = Modal.current;
        modal.classList.add("display");
        disableScroll();
    }

    const hideModal = e => {
        let modal = e.target;
        modal.classList.remove("display");
        enableScroll();
    }
    function preventDefault(e) {
        e.preventDefault();
      }
      
      function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
        }
      }
      
      // modern Chrome requires { passive: false } when adding event
      var supportsPassive = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () { supportsPassive = true; } 
        }));
      } catch(e) {}
      
      var wheelOpt = supportsPassive ? { passive: false } : false;
      var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
      
    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    useEffect(() => {
    }, [])
    
    return(
        <>
            <div className="modal" ref={Modal} onClick={e => hideModal(e)}>
                <div className="card profile">
                    <div className="text">
                        <div className="title">
                        About me.
                        </div>
                        <div className="body">
                        I’m Martin Kopecký, a 21 year old weirdo from Czech republic, interested in Front-end development.
                        <br/>
                        <br/>
                        I'm a nerd that likes to play video games and build websites.
                        <br/>
                        <br/>
                        I’m interested in UI/UX development and creating smart user interface with awesome and rich experience for the user.
                        </div>
                        <div className="svg-profile">
                            <svg viewBox="0 0 62 62">
                            <path d="M0.413574 0.450317V61.3022H61.2655V0.450317H0.413574ZM33.5292 47.9108C33.5292 53.8337 30.0566 56.5274 24.9896 56.5274C20.4176 56.5274 17.7625 54.1582 16.4136 51.3022L21.0708 48.4828C21.9694 50.0568 22.7868 51.4037 24.7462 51.4037C26.6245 51.4037 27.8091 50.6876 27.8091 47.8134V28.3814H33.5292V47.9108ZM47.0505 56.5274C41.7401 56.5274 38.3081 53.996 36.6347 50.6856L41.2898 47.9939C42.515 49.9777 44.1093 51.4625 46.9288 51.4625C49.2959 51.4625 50.7888 50.2779 50.7888 48.6308C50.7888 46.6714 49.2351 45.9736 46.6225 44.8479L45.2026 44.2191C41.0769 42.4645 38.3405 40.2576 38.3405 35.5984C38.3405 31.3124 41.5941 28.0426 46.7138 28.0426C50.3487 28.0426 52.9612 29.3104 54.8436 32.6146L50.4014 35.4645C49.4278 33.7201 48.3608 33.0102 46.7259 33.0102C45.0545 33.0102 43.9835 34.069 43.9835 35.4645C43.9835 37.1927 45.0383 37.8743 47.4927 38.9331L48.9186 39.5619C53.7807 41.6308 56.519 43.7607 56.519 48.5477C56.5332 53.7079 52.4907 56.5193 47.0566 56.5193L47.0505 56.5274Z"/>
                            </svg>
                            <svg viewBox="0 0 62 55">
                            <path d="M61.5736 27.2034C61.5736 23.1719 56.5254 19.3509 48.7845 16.9828C50.5721 9.09485 49.7785 2.81696 46.2795 0.806308C45.4317 0.331462 44.4721 0.0924448 43.5006 0.114118V2.87781C44.0711 2.87781 44.53 2.99191 44.9154 3.20235C46.6015 4.17091 47.3342 7.85245 46.7638 12.5913C46.6268 13.7576 46.4037 14.9848 46.1299 16.2373C43.5377 15.6127 40.9068 15.1612 38.2546 14.8859C36.6747 12.7061 34.9509 10.6342 33.0949 8.6841C37.139 4.92649 40.9347 2.86767 43.5158 2.86767V0.10144C40.103 0.10144 35.638 2.53298 31.1223 6.74951C26.6091 2.56087 22.1416 0.15215 18.7313 0.15215V2.91584C21.2998 2.91584 25.1081 4.96452 29.1522 8.69677C27.4154 10.5223 25.6786 12.5913 24.028 14.8859C21.3703 15.1582 18.7347 15.614 16.14 16.25C15.8658 15.0629 15.65 13.863 15.4935 12.6547C14.9103 7.91331 15.6304 4.23176 17.3064 3.25306C17.6765 3.02994 18.1608 2.92852 18.7313 2.92852V0.164828C17.6918 0.164828 16.746 0.387951 15.9296 0.857018C12.4433 2.86767 11.6623 9.13034 13.46 16.9955C5.7445 19.3788 0.72168 23.1846 0.72168 27.2034C0.72168 31.2348 5.76985 35.0558 13.5107 37.4214C11.7232 45.3119 12.5168 51.5898 16.0158 53.5979C16.8221 54.0695 17.7653 54.2926 18.8048 54.2926C22.2176 54.2926 26.6826 51.8611 31.1983 47.6445C35.7115 51.8357 40.1765 54.2419 43.5893 54.2419C44.5683 54.2626 45.5352 54.0228 46.391 53.5472C49.8773 51.5391 50.6583 45.2764 48.8606 37.4113C56.5508 35.0431 61.5736 31.2221 61.5736 27.2034ZM45.4225 18.93C44.9407 20.5879 44.3823 22.2225 43.7491 23.8286C42.7124 21.8123 41.5742 19.8498 40.3388 17.9488C42.101 18.21 43.7998 18.532 45.425 18.93H45.4225ZM39.743 32.14C38.8143 33.7613 37.8169 35.3424 36.7536 36.8788C33.0321 37.2068 29.2892 37.2111 25.567 36.8915C23.432 33.8418 21.5648 30.613 19.9864 27.2414C21.5624 23.8618 23.4216 20.6217 25.5442 17.5558C29.2648 17.2271 33.0068 17.222 36.7283 17.5406C37.7577 19.0162 38.7643 20.5933 39.7303 22.2566C40.6735 23.8793 41.5305 25.5274 42.3114 27.1907C41.5218 28.8741 40.665 30.5252 39.743 32.14ZM43.7491 30.5274C44.4184 32.1881 44.9914 33.8514 45.4605 35.464C43.8378 35.8621 42.1238 36.1968 40.3515 36.4554C41.5818 34.5371 42.7157 32.5586 43.7491 30.5274ZM31.173 43.7627C30.0193 42.571 28.8657 41.2449 27.7247 39.7921C28.8403 39.8428 29.9813 39.8808 31.135 39.8808C32.3013 39.8808 33.4549 39.8555 34.5832 39.7921C33.4676 41.2449 32.314 42.571 31.173 43.7627ZM21.9438 36.4554C20.2342 36.2077 18.537 35.8811 16.8576 35.4767C17.3165 33.8768 17.887 32.2262 18.531 30.5781C19.0406 31.567 19.5756 32.5609 20.1588 33.5548C20.742 34.5462 21.3353 35.5147 21.9438 36.4554ZM31.1096 10.644C32.2633 11.8357 33.4169 13.1618 34.5579 14.6146C33.4423 14.5639 32.3013 14.5259 31.1476 14.5259C29.9813 14.5259 28.8277 14.5512 27.6994 14.6146C28.815 13.1618 29.9686 11.8357 31.1096 10.644ZM21.9311 17.9513C20.7011 19.8655 19.5671 21.8397 18.5335 23.8666C17.8825 22.2502 17.3113 20.6026 16.8221 18.93C18.4448 18.5446 20.1588 18.21 21.9311 17.9513ZM10.7065 33.4787C6.31498 31.6075 3.47523 29.1506 3.47523 27.2034C3.47523 25.2561 6.31498 22.7865 10.7065 20.928C11.7714 20.4691 12.9377 20.0583 14.1421 19.6755C14.8495 22.1045 15.78 24.6349 16.9311 27.2287C15.8443 29.6683 14.9252 32.1792 14.1801 34.7439C13.0022 34.3792 11.843 33.957 10.7065 33.4787ZM17.3799 51.2018C15.6938 50.2383 14.961 46.5517 15.5315 41.8154C15.6684 40.6491 15.8916 39.4194 16.1654 38.1669C18.5944 38.7627 21.2491 39.2216 24.0406 39.5208C25.6207 41.7005 27.3444 43.7724 29.2004 45.7226C25.1563 49.4802 21.3606 51.5391 18.7795 51.5391C18.2925 51.5444 17.8118 51.4294 17.3799 51.2044V51.2018ZM46.8018 41.752C47.385 46.4909 46.6649 50.175 44.9889 51.1537C44.6187 51.3768 44.1344 51.4757 43.564 51.4757C40.9955 51.4757 37.1872 49.4295 33.1431 45.6947C34.9913 43.7527 36.7034 41.6856 38.2673 39.5081C40.9249 39.2359 43.5605 38.7801 46.1552 38.144C46.4418 39.3966 46.6623 40.5984 46.8018 41.752ZM51.5761 33.4787C50.5112 33.9376 49.3449 34.3484 48.1405 34.7313C47.3824 32.1535 46.4505 29.6299 45.3515 27.178C46.4925 24.5994 47.4078 22.0817 48.1025 19.6628C49.2841 20.0287 50.4475 20.4509 51.5888 20.928C55.9803 22.7992 58.82 25.2561 58.82 27.2034C58.8074 29.1506 55.9676 31.6202 51.5761 33.4787Z"/>
                            <path d="M31.1342 32.8727C32.6378 32.8727 34.0799 32.2754 35.1431 31.2122C36.2063 30.149 36.8036 28.707 36.8036 27.2034C36.8036 25.6998 36.2063 24.2577 35.1431 23.1945C34.0799 22.1313 32.6378 21.534 31.1342 21.534C29.6306 21.534 28.1886 22.1313 27.1254 23.1945C26.0622 24.2577 25.4648 25.6998 25.4648 27.2034C25.4648 28.707 26.0622 30.149 27.1254 31.2122C28.1886 32.2754 29.6306 32.8727 31.1342 32.8727Z" fill="black"/>
                            </svg>
                            <svg viewBox="0 0 52 62">
                            <path d="M26.3339 36.7439C25.2875 37.2247 24.1411 37.8512 21.846 39.1108C20.9759 39.6002 20.0665 40.0897 19.2203 40.5509C19.1616 40.4922 19.1006 40.4182 19.0419 40.3573C14.5018 35.5061 6.10471 32.0798 6.46148 25.5644C6.59418 23.1911 7.40996 16.9607 22.5878 9.39458C35.0791 3.23815 45.0185 4.94367 46.7349 8.72672C49.2019 14.1196 41.4074 24.1548 28.5071 25.6101C27.0794 25.8997 25.6048 25.8647 24.1924 25.5078C22.78 25.1508 21.4659 24.481 20.3472 23.5478C19.6641 22.806 19.5618 22.7625 19.3095 22.9104C18.894 23.128 19.1616 23.8002 19.3095 24.1852C19.8016 25.0762 20.4673 25.8594 21.2673 26.4886C22.0672 27.1179 22.9853 27.5803 23.9671 27.8486C29.0436 28.9459 34.3366 28.4216 39.0992 26.3498C46.9177 23.3238 53.0219 14.9114 51.2337 7.85873C49.439 0.708138 37.5699 -1.65001 26.3404 2.3397C19.3079 4.70959 12.8105 8.44024 7.21852 13.319C1.03164 19.1056 0.0527063 24.1352 0.452983 26.241C1.89311 33.7179 12.2002 38.5843 16.3335 42.189C16.116 42.3086 15.9332 42.4065 15.7701 42.5001C13.7078 43.5247 5.84584 47.634 3.88579 51.9805C1.66034 56.9057 4.24256 60.4364 5.94808 60.9106C8.51831 61.5263 11.2166 61.3239 13.6663 60.3317C16.1159 59.3395 18.1945 57.6071 19.6119 55.3764C20.8155 53.5265 21.5546 51.4134 21.7663 49.2167C21.978 47.0199 21.6561 44.8046 20.8279 42.7589C21.3165 42.3692 21.8376 42.022 22.3855 41.7213C23.4384 41.0991 24.4413 40.4856 25.331 40.0114C28.3774 38.5844 31.702 37.8497 35.066 37.8599C42.1274 38.6909 43.5219 43.0961 43.2543 44.9518C43.1291 45.6101 42.8644 46.234 42.4779 46.7815C42.0914 47.329 41.5921 47.7873 41.0136 48.1257C40.5241 48.4368 40.361 48.5412 40.4045 48.7631C40.4632 49.0894 40.7003 49.0742 41.1158 49.0154C42.1768 48.6801 43.1115 48.0317 43.7971 47.1555C44.4828 46.2792 44.8873 45.216 44.9576 44.1055C45.1752 39.7547 41.0267 34.9818 33.6825 35.0253C31.4834 35.0291 29.3063 35.4629 27.2737 36.3023C26.9474 36.4372 26.6305 36.5822 26.323 36.7374L26.3339 36.7439ZM15.8375 53.797C13.4924 56.3488 10.2293 57.3125 8.81963 56.4967C7.29684 55.6265 7.89943 51.8522 10.7775 49.1525C12.4821 47.6167 14.3245 46.2411 16.2813 45.0431C16.6228 44.8256 17.1275 44.5384 17.7345 44.173L17.8976 44.0838L18.2544 43.8662C18.7677 45.5872 18.8144 47.4137 18.3897 49.1587C17.9651 50.9036 17.0843 52.5044 15.8375 53.797Z"/>
                            </svg>

                        </div>
                    </div>
                    <div className="splash">
                        <div className="mask"/>
                    </div>
                </div>
            </div>
            <section>
                <div className="main-slot">
                    <div className="main-card">
                        <div className="title">
                            {"<KopyTKG/>"}
                        </div>
                        <div className="description">
                            {"Front-end UI/UX developer"} <br/>
                            <span className="subtext">FIND MORE <button className="btn btn-success-outline rounded" onClick={e => showModal(e)}> About me</button></span>
                        </div>
                    </div>
                </div>
                <div className="main-splash"/>
            </section> 
            <section className="project-section">
                <header>
                    <span className="sub-title">My projects</span> <br/>
                    <span className="title">Latest work</span>
                </header>
                <div className="projects">
                    <a className="card" target="_blank" href="#">
                        <div className="project-img" style={{
                            background: "url("+Signpost+")",
                            backgroundSize: "cover",
                            backgroundPosition: "center"}}>
                            <div className="project-modal">
                                <div className="project-number">
                                    01
                                </div>
                                <div className="project-name">
                                    Signpost
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            
            <footer className="footer grid gap-1rem">
                <div className="grid-col-span-3">
                    <span className="fotter">
                        created by <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success-outline rounded">{"<KopyTKG/>"} </a>            
                    </span>
                </div>
                <div className="grid-col-span-3">
                    <div className="grid grid-col-3 gap-2rem ">
                        <div>
                            <a className="btn btn-success-dark" href="https://github.com/kopytkg">Github</a>
                        </div>
                        <div>
                            <a className="btn btn-success-dark" href="https://twitter.com/kopy_tkg">Twitter</a>
                        </div>
                        <div>
                            <a className="btn btn-success-dark" href="https://www.instagram.com/kopy_tkg/">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="grid-col-span-3">
                    <span className="copyright">
                        <a onClick={() => {
                            console.log(`
                            cfgver "1"
    unbindall
    bind "0" "slot10"
    bind "1" "slot1"
    bind "2" "slot2"
    bind "3" "slot3"
    bind "4" "slot4"
    bind "5" "slot5"
    bind "6" "slot6"
    bind "7" "slot7"
    bind "8" "slot8"
    bind "9" "slot9"
    bind "a" "+moveleft"
    bind "b" "buymenu"
    bind "c" "radio3"
    bind "d" "+moveright"
    bind "e" "+use"
    bind "f" "impulse 100"
    bind "g" "drop"
    bind "h" "commandmenu"
    bind "i" "showbriefing"
    bind "j" "cheer"
    bind "k" "+voicerecord"
    bind "l" "headtrack_reset_home_pos"
    bind "m" "chooseteam"
    bind "n" "nightvision"
    bind "o" "buyequip"
    bind "p" "pause"
    bind "q" "lastinv"
    bind "r" "+reload"
    bind "s" "+back"
    bind "t" "impulse 201"
    bind "u" "messagemode2"
    bind "w" "+forward"
    bind "x" "radio2"
    bind "y" "messagemode"
    bind "z" "radio1"
    bind "´" "toggleconsole"
    bind "," "buyammo1"
    bind "." "buyammo2"
    bind "SPACE" "+jump"
    bind "TAB" "+showscores"
    bind "ESCAPE" "cancelselect"
    bind "PAUSE" "pause"
    bind "SHIFT" "+speed"
    bind "CTRL" "+duck"
    bind "F1" "autobuy"
    bind "F2" "rebuy"
    bind "F3" "askconnect_accept"
    bind "F4" "bug"
    bind "F5" "jpeg"
    bind "F6" "save quick"
    bind "F7" "load quick"
    bind "F9" "vr_toggle"
    bind "F10" "quit prompt"
    bind "MOUSE1" "+attack"
    bind "MOUSE2" "+attack2"
    bind "MWHEELUP" "+jump"
    bind "MWHEELDOWN" "+jump"
    cl_first_person_uses_world_model "0"
    cl_righthand "1"
    cl_rumblescale "1.0"
    cl_debugrumble "0"
    cl_thirdperson "0"
    cl_team "default"
    cl_class "default"
    vr_activate_default "0"
    vr_moveaim_mode "3"
    vr_moveaim_mode_zoom "3"
    vr_moveaim_reticle_yaw_limit "10"
    vr_moveaim_reticle_pitch_limit "30"
    vr_moveaim_reticle_yaw_limit_zoom "0"
    vr_moveaim_reticle_pitch_limit_zoom "-1"
    vr_hud_max_fov "60"
    vr_hud_forward "500"
    vr_hud_display_ratio "0.95"
    vr_hud_axis_lock_to_world "0"
    vr_zoom_multiplier "2.0"
    vr_force_windowed "0"
    hud_takesshots "0"
    hud_freezecamhide "0"
    cl_detail_max_sway "5"
    cl_detail_avoid_radius "64"
    cl_detail_avoid_force "0.4"
    cl_detail_avoid_recover_speed "0.25"
    r_drawtracers_firstperson "1"
    cl_showhelp "1"
    hud_draw_fixed_reticle "0"
    hud_achievement_description "1"
    hud_achievement_count "5"
    cl_chatfilters "63"
    cl_chatfilter_version "1"
    cl_mute_all_comms "1"
    cc_linger_time "1.0"
    cc_predisplay_time "0.25"
    cc_subtitles "0"
    cc_lang ""
    crosshair "2"
    cl_observercrosshair "1"
    cl_hudhint_sound "1"
    g15_update_msec "250"
    cam_snapto "0"
    cam_ideallag "4.0"
    cam_idealdelta "4.0"
    cam_idealyaw "0"
    cam_idealpitch "0"
    cam_idealdist "150"
    cam_idealdistright "0"
    cam_idealdistup "0"
    cam_collision "1"
    c_maxpitch "90"
    c_minpitch "0"
    c_maxyaw "135"
    c_minyaw "-135"
    c_maxdistance "200"
    c_mindistance "30"
    c_orthowidth "100"
    c_orthoheight "100"
    joy_name "joystick"
    joy_advanced "1"
    joy_advaxisx "4"
    joy_advaxisy "2"
    joy_advaxisz "0"
    joy_advaxisr "1"
    joy_advaxisu "3"
    joy_advaxisv "0"
    joy_forwardthreshold "0.15"
    joy_sidethreshold "0.15"
    joy_pitchthreshold "0.15"
    joy_yawthreshold "0.15"
    joy_forwardsensitivity "-1"
    joy_sidesensitivity "1"
    joy_pitchsensitivity "1"
    joy_yawsensitivity "-1"
    joy_response_move "1"
    joy_response_look "0"
    joy_lowend "1"
    joy_lowmap "1"
    joy_accelscale "0.6"
    joy_accelmax "1.0"
    joy_autoaimdampenrange "0"
    joy_autoaimdampen "0"
    joy_diagonalpov "0"
    joy_display_input "0"
    joy_wingmanwarrior_turnhack "0"
    joy_inverty "0"
    joy_movement_stick "0"
    joy_xcontroller_cfg_loaded "0"
    cl_upspeed "320"
    cl_forwardspeed "400"
    cl_backspeed "400"
    lookspring "0"
    lookstrafe "0"
    joystick "0"
    m_pitch "0.022"
    m_filter "0"
    sensitivity "3"
    m_side "0.8"
    m_yaw "0.022"
    m_forward "1"
    m_customaccel "0"
    m_customaccel_scale "0.04"
    m_customaccel_max "0"
    m_customaccel_exponent "1"
    m_mousespeed "1"
    m_mouseaccel1 "0"
    m_mouseaccel2 "0"
    m_rawinput "0"
    cl_mouselook "1"
    cl_idealpitchscale "0.8"
    net_scale "5"
    net_graphpos "1"
    net_graphsolid "1"
    net_graphtext "1"
    net_graphmsecs "400"
    net_graphshowlatency "1"
    net_graphshowinterp "1"
    net_graph "0"
    net_graphheight "64"
    net_graphproportionalfont "1"
    mat_viewportscale "1.0"
    mat_viewportupscale "1"
    cl_software_cursor "0"
    mat_software_aa_strength "0.000000"
    mat_software_aa_quality "0"
    mat_software_aa_edge_threshold "1.0"
    mat_software_aa_blur_one_pixel_lines "0.5"
    mat_software_aa_tap_offset "1.0"
    mat_software_aa_strength_vgui "1.000000"
    pyro_vignette "2"
    pyro_vignette_distortion "1"
    pyro_min_intensity "0.1"
    pyro_max_intensity "0.35"
    pyro_min_rate "0.05"
    pyro_max_rate "0.2"
    pyro_min_side_length "0.3"
    pyro_max_side_length "0.55"
    pyro_min_side_width "0.65"
    pyro_max_side_width "0.95"
    voice_modenable "1"
    hud_fastswitch "0"
    cl_buy_favorite_quiet "0"
    cl_buy_favorite_nowarn "0"
    cl_autowepswitch "1"
    cl_autohelp "1"
    cl_show_achievement_popups "1"
    cl_disablefreezecam "0"
    hud_showtargetpos "0"
    hud_showtargetid "1"
    cl_radartype "0"
    cl_radaralpha "200"
    cl_locationalpha "150"
    cl_scoreboard_ct_color_red "150"
    cl_scoreboard_ct_color_green "200"
    cl_scoreboard_ct_color_blue "255"
    cl_scoreboard_t_color_red "240"
    cl_scoreboard_t_color_green "90"
    cl_scoreboard_t_color_blue "90"
    cl_scoreboard_dead_color_red "125"
    cl_scoreboard_dead_color_green "125"
    cl_scoreboard_dead_color_blue "125"
    cl_scoreboard_clan_ct_color_red "150"
    cl_scoreboard_clan_ct_color_green "200"
    cl_scoreboard_clan_ct_color_blue "255"
    cl_scoreboard_clan_t_color_red "240"
    cl_scoreboard_clan_t_color_green "90"
    cl_scoreboard_clan_t_color_blue "90"
    cl_scoreboard_dead_clan_color_red "125"
    cl_scoreboard_dead_clan_color_green "125"
    cl_scoreboard_dead_clan_color_blue "125"
    cl_radar_locked "0"
    overview_preferred_mode "1"
    overview_preferred_view_size "600"
    cl_round_win_fade_time "1.5"
    cl_nowinpanel "0"
    cl_crosshaircolor "5"
    cl_dynamiccrosshair "0"
    cl_crosshairspreadscale "0"
    cl_scalecrosshair "1"
    cl_crosshairscale "0"
    cl_crosshairalpha "255"
    cl_crosshairusealpha "1"
    cl_crosshairsize "4"
    cl_crosshairthickness "0.850000"
    cl_crosshairdot "0"
    cl_crosshaircolor_r "255.000000"
    cl_crosshaircolor_g "0.000000"
    cl_crosshaircolor_b "255.000000"
    cl_legacy_crosshair_recoil "0"
    cl_legacy_crosshair_scale "0"
    hud_classautokill "1"
    overview_health "1"
    overview_names "1"
    overview_tracks "1"
    overview_locked "1"
    overview_alpha "1.0"
    spec_scoreboard "0"
    cl_spec_mode "5"
    cl_disablehtmlmotd "0"
    cl_playerspraydisable "0"
    muzzleflash_light "1"
    r_eyegloss "1"
    commentary_firstrun "0"
    vgui_message_dialog_modal "1"
    scene_showfaceto "0"
    ai_report_task_timings_on_limit "0"
    ai_think_limit_label "0"
    npc_height_adjust "1"
    sv_pvsskipanimation "1"
    scene_showlook "0"
    scene_showmoveto "0"
    scene_showunlock "0"
    xbox_throttlebias "100"
    xbox_throttlespoof "200"
    xbox_autothrottle "1"
    func_break_max_pieces "15"
    suitvolume "0.25"
    option_duck_method "1"
    sk_autoaim_mode "1"
    sv_noclipaccelerate "5"
    sv_noclipspeed "5"
    sv_specaccelerate "5"
    sv_specspeed "3"
    sv_specnoclip "1"
    sv_backspeed "0.6"
    sv_skyname "sky_dust"
    weapon_accuracy_logging "0"
    weapon_accuracy_model "2"
    windows_speaker_config "4"
    snd_legacy_surround "0"
    snd_pitchquality "1"
    volume "0.140000"
    snd_musicvolume "0.190000"
    snd_mixahead "0.1"
    adsp_debug "0"
    snd_ducktovolume "0.55"
    snd_duckerattacktime "0.5"
    snd_duckerreleasetime "2.5"
    snd_duckerthreshold "0.15"
    dsp_slow_cpu "0"
    dsp_volume "1.0"
    dsp_enhance_stereo "0"
    snd_mute_losefocus "1"
    voice_scale "0.170000"
    voice_enable "1"
    voice_forcemicrecord "1"
    name "Kopy.TKG"
    password "159357"
    cl_clanid "0"
    sv_unlockedchapters "1"
    tv_nochat "0"
    cl_showpluginmessages "0"
    cl_timeout "30"
    cl_logofile "materials/vgui/logos/spray.vtf"
    cl_soundfile "sound/player/jingle.wav"
    cl_forcepreload "0"
    cl_allowdownload "1"
    cl_downloadfilter "all"
    con_enable "1"
    r_eyemove "1"
    r_eyeshift_x "0"
    r_eyeshift_y "0"
    r_eyeshift_z "0"
    r_eyesize "0"
    r_ambientboost "1"
    r_ambientmin "0.3"
    r_ambientfactor "5"
    r_drawmodelstatsoverlaymin "0.1"
    r_drawmodelstatsoverlaymax "1.5"
    mp_decals "200"
    mat_color_projection "0"
    sv_logsdir "logs"
    sv_logfile "1"
    sv_logflush "0"
    sv_logecho "1"
    sv_log_onefile "0"
    sv_logbans "0"
    sv_logfilename_format ""
    sv_logfilecompress "0"
    sv_voiceenable "1"
    sv_forcepreload "0"
    bugreporter_uploadasync "0"
    rate "80000"
    cl_cmdrate "30"
    cl_updaterate "20"
    closecaption "0"
    skill "1"
    net_maxroutable "1260"
    cl_allowupload "1"
    engine_no_focus_sleep "50"
    mat_powersavingsmode "0"
    budget_bargraph_background_alpha "128"
    budget_peaks_window "30"
    budget_averages_window "30"
    budget_show_peaks "1"
    budget_show_averages "0"
    budget_show_history "1"
    budget_history_numsamplesvisible "100"
    budget_history_range_ms "66.666666667"
    budget_panel_bottom_of_history_fraction ".25"
    budget_bargraph_range_ms "16.6666666667"
    budget_background_alpha "128"
    budget_panel_x "0"
    budget_panel_y "50"
    budget_panel_width "512"
    budget_panel_height "384"
    texture_budget_panel_x "0"
    texture_budget_panel_y "450"
    texture_budget_panel_width "512"
    texture_budget_panel_height "284"
    texture_budget_panel_bottom_of_history_fraction ".25"
    texture_budget_background_alpha "128"
    vprof_graphwidth "512"
    vprof_graphheight "256"
    vprof_verbose "1"
    vprof_unaccounted_limit "0.3"
    vprof_warningmsec "10"
    video_quicktime_encode_gamma "3"
    video_quicktime_decode_gamma "0"
    r_rootlod "0"
    mat_monitorgamma_tv_enabled "0"
    r_waterforceexpensive "1"
    mat_queue_mode "-1"
    mat_queue_report "0"
    mat_managedtextures "1"
    mat_spewalloc "0"
    mat_texture_list_content_path ""
    joy_axisbutton_threshold "0.3"
    joy_axis_deadzone "0.2"
    joy_gamecontroller_config ""
    mat_disable_d3d9ex "0"
    mat_hdr_level "2"
`);}}>
                        © 
                        </a> &nbsp;)¨§)§ů
                        {new Date(Date.now()).getFullYear()} definitelynotawebsite.website
                    </span>
                </div>
            </footer> 
        </>
    );
};

export default Layout;