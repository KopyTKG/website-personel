
export default function Footer() {
    return(
        <footer className="footer grid">
                <div className="fotter">
                    <span>
                        created by 
                            <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success rounded" rel="noreferrer">KopyTKG</a>
                    </span>    
                </div> 
                <div className="copyright">
                    <span>
                    © 
                    </span> &nbsp;
                    {new Date(Date.now()).getFullYear()} thekrew.app
                </div>
            </footer> 
    );
}