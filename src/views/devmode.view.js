import { useState } from 'react'
import { NotificationManager } from 'react-notifications';

const DevView = () => {
    const [Code, setCode] = useState([
        {
            id: 0,
            title: "CS: Source",
            command: "-novid -tickrate 128 -w 1920 -h 1080 +fps_max 0"
        },
        {
            id: 1,
            title: "CS:GO",
            command: "-nojoy -fullscreen -novid -tickrate 128 -w 1920 -h 1080 +fps_max 0"
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
                    </div>
                </>);
            })
        }
        
    </div>
    </>
  )
}

export default DevView