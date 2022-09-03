import { useState } from 'react'
import { NotificationManager } from 'react-notifications';

const DevView = () => {
    const [Code, setCode] = useState([
        {
            id: 0,
            title: "CS: Source",
            command: "-novid -tickrate 128 -w 1920 -h 1080 +fps_max 0",
            config: "https://raw.githubusercontent.com/KopyTKG/CONFIG-STORE/main/css.cfg"
        },
        {
            id: 1,
            title: "CS:GO",
            command: "-nojoy -fullscreen -novid -tickrate 128 -w 1920 -h 1080 +fps_max 0",
            config: "https://raw.githubusercontent.com/KopyTKG/CONFIG-STORE/main/csgo.cfg"
        },
        {
            id: 2,
            title: "Valorant cross",
            command: "0;s;1;P;c;8;u;FF4D00FF;o;1;d;1;b;1;z;5;f;0;s;0;0t;3;0l;3;0v;5;0o;0;0a;1;0m;1;0s;0.1;1b;0;S;b;1;c;8;t;FF4D00FF;s;2;o;0.5",
        }
    ]);

    const handleCopy = (copy) => {
        navigator.clipboard.writeText(copy);
        NotificationManager.success('Code data copied to clipboard', 'Success!');
    }
  return (
    <>
    <div className='container'>
        {
            Code.map((row, key) => {
                return(<>
                    <div className='code' key={row.id + key+ Date.now()}>
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
                </>);
            })
        }
        
    </div>
    </>
  )
}

export default DevView