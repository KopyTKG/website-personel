const Header = (props) => {
    return(
        <div className="project-header">
            <main className="project-title">{props.Title}</main>
            <div className="project-description">
            {props.children}
            <span className="project-update">Last update: <span className="update">{props.Update}</span></span>
            </div>
            <div className="line"/>
        </div>
    );
}

export default Header;
