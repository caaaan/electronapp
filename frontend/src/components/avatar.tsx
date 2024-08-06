import React from 'react';
import pfp from "../public/media/pfp.png";

const AvatarComponent: React.FC = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
        <img 
            src="public/media/pfp.png" 
            alt="Avatar" 
            style={{ width: '50%', height: '50%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarComponent;
