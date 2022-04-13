const Parallax = (props) => {
    const render = () => {
        window.addEventListener("scroll", () => {
            const target = document.querySelectorAll(".parallax");
            let index = 0, lenght = target.length;
            for(index; index < lenght; index++) {
                let pos = window.pageYOffset * target[index].dataset.rate;

                if(target[index].dataset.direction === "vertical") {
                    target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
                } else {
                    let posX = window.pageXOffset * target[index].dataset.rateX; 
                    let posY = window.pageYOffset * target[index].dataset.rateY;

                    target[index].style.transform = 'translate3d('+posX+'px;'+posY+'px;0px)';
                }
            }
        })
    }
    return(<>
    {render()}
    {props.children}
    </>);
}

export default Parallax;