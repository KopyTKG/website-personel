const Header = (props) => {
    return(
        <div className="project-header">
            <main className="project-title">{props.Title}</main>
            <desc className="project-description">
            {props.children}
            <span className="project-update">Last update: <span className="update">{props.Update}</span></span>
            </desc>
            <div className="line"/>
        </div>
    );
}

export default Header;
