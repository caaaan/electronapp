import React from 'react';

export const Work: React.FC = () =>{
    const electron = (window as any).electron;
    return <div>
            This is work page content <br/>
        
            the home directory is @ {electron.homeDir()}
    </div>
}