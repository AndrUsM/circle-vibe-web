import { type FC } from 'react';
import { Avatar } from '@mui/material';

export const Chat: FC = () => {
  return (
    <div className="flex flex-row gap-1">
      <Avatar></Avatar>

      <div className="flex flex-col gap-2">
        {/* CHAT NAME */}
        <h5>Saved messages</h5>

        {/* LAST MESSAGE, TODO: move to separate component */}

        {/* TEXT */}
        <span className="text-sm font-light text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, unde.</span>

        {/* ONE FILE */}
        <div>
          <span>ICON XS</span>
          <span>FILE NAME</span>
        </div>

        {/* MULTIPLE FILES */}
        <span>N files, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, nesciunt.</span>
      </div>
    </div>
  )
}
