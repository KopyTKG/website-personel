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
                        <a className='file' href={row.config} download target="_blank">DOWNLOAD CONFIG</a>
                    </div>
                </>);
            })
        }
        
    </div>
    </>
  )
}

export default DevView