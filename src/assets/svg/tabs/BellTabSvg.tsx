import * as React from 'react';
import {useSelector} from 'react-redux';

import {TabScreens} from '../../../routes';
import {RootState} from '../../../store';

export const BellTabSvg: React.FC = () => {
  const currentTabScreen = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
    >
      <path
        fill={
          currentTabScreen === TabScreens.Notification
            ? 'var(--main-turquoise)'
            : 'var(--text-color)'
        }
        fillOpacity={0.15}
        d='M19.5 18h-15a.75.75 0 0 1-.645-1.125c.618-1.069 1.395-3.018 1.395-6.375a6.75 6.75 0 0 1 13.5 0c0 3.358.778 5.306 1.397 6.375A.75.75 0 0 1 19.5 18Z'
      />
      <path
        fill={
          currentTabScreen === TabScreens.Notification
            ? 'var(--main-turquoise)'
            : 'var(--text-color)'
        }
        d='M21 6.666a.75.75 0 0 1-1.01-.321 8.825 8.825 0 0 0-3.137-3.46.751.751 0 0 1 .8-1.27 10.449 10.449 0 0 1 3.668 4.04.75.75 0 0 1-.321 1.01ZM3.348 6.75a.75.75 0 0 0 .665-.405 8.825 8.825 0 0 1 3.137-3.46.75.75 0 1 0-.8-1.27 10.45 10.45 0 0 0-3.668 4.04.75.75 0 0 0 .666 1.095Zm17.447 9.744A1.5 1.5 0 0 1 19.5 18.75h-3.825a3.75 3.75 0 0 1-7.35 0H4.5a1.5 1.5 0 0 1-1.293-2.256C4.052 15.037 4.5 12.964 4.5 10.5a7.5 7.5 0 1 1 15 0c0 2.463.448 4.536 1.295 5.994ZM14.12 18.75H9.879a2.25 2.25 0 0 0 4.242 0Zm5.379-1.5c-.997-1.713-1.5-3.983-1.5-6.75a6 6 0 1 0-12 0c0 2.767-.504 5.038-1.5 6.75h15Z'
      />
    </svg>
  );
};
