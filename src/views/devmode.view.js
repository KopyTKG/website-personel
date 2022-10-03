import { useState } from 'react'
import { NotificationManager } from 'react-notifications';

const DevView = () => {
    const [Code, setCode] = useState([
        {
            id: 0,
            title: "CS: Source",
            command: "-novid -tickrate 128 -w 1920 -h 1080 +fps_max 0",
            img: "https://imgs.search.brave.com/mJ5NXxFH5aJZEllbqlW-TA8R2jU0Gzi0LvaIUrdOS8Y/rs:fit:1200:1200:1/g:ce/aHR0cDovL3NwZWVk/LW5ldy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTUvMDUv/MjM1MzM0MS5qcGc",
            config: "https://raw.githubusercontent.com/KopyTKG/CONFIG-STORE/main/css.cfg"
        },
        {
            id: 1,
            title: "CS:GO",
            command: "-nojoy -fullscreen -novid -tickrate 128 -w 1920 -h 1080 +fps_max 0",
            img: "https://imgs.search.brave.com/wGpRQEhMv7U53FUBzi8fYdN7W9-uFQBcVzeaq5I6vR8/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly9iYy1n/Yi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTAvY3Nn/by1sb2dvLXdhbGxw/YXBlcnMtNy5qcGc",
            config: "https://raw.githubusercontent.com/KopyTKG/CONFIG-STORE/main/csgo.cfg"
        },
        {
            id: 2,
            title: "Valorant cross",
            img: "https://imgs.search.brave.com/EXYr1uYHIemEHQxn85c6LaHfxG0umO_eh8li4zC3WaY/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA3/NDcvMzgyOS9wcm9k/dWN0cy9tTDQ0NjVf/MTAyNHgxMDI0Lmpw/Zz92PTE1OTE4Mjcx/NTI",
            command: "0;s;1;P;c;8;u;FF4D00FF;o;1;d;1;b;1;z;5;f;0;s;0;0t;3;0l;3;0v;5;0o;0;0a;1;0m;1;0s;0.1;1b;0;S;b;1;c;8;t;FF4D00FF;s;2;o;0.5",
        }
    ]);

    const handleCopy = (copy) => {
        navigator.clipboard.writeText(copy);
        NotificationManager.success('Code data copied to clipboard', 'Success!');
    }
  return (
    <>
    <div className='list'>
        {
            Code.map((row,key) => {
                return(<>
                    <div className='block code'>
                        <div className='text'>
                            <h2>{row.title}</h2>
                            <code onClick={() => handleCopy(row.command)} children={row.command}/> 
                            <br/>
                            <br/>
                            {
                                row.config?
                                <a className='file' href={row.config} download target="_blank" rel="noreferrer">DOWNLOAD CONFIG</a>
                                : null
                            }
                        </div>
                        <div className='thumbnail' style={{backgroundImage: "url("+row.img+")"}}/> 
                    </div>
                </>)
            })
        }
    </div>
    <footer className="footer grid gap-1rem">
                <div className="grid-col-span-3">
                    <span className="fotter">
                        created by <a href="https://github.com/kopytkg/" target="_blank" className="btn btn-success-outline rounded" rel="noreferrer">{"<KopyTKG/>"} </a>            
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
                        <a>
                        © 
                        </a> &nbsp;
                        {new Date(Date.now()).getFullYear()} definitelynotawebsite.website
                    </span>
                </div>
            </footer> 

    </>
  )
}

export default DevView