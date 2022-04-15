const Parallax = (props) => {
    return(
        <>
        <div className="parallax" data-direction={props.direction} data-rate={props.speed}>
            {props.children}
        </div>
        </>
    );
}

export default Parallax;