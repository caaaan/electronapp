import React from 'react';

const AvatarComponent: React.FC = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
        <img 
            src="htlocalhost:3000/electronapp/my-app/public/media/pfp.png" 
            alt="Avatar" 
            style={{ width: '50%', height: '50%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarComponent;
