import React from 'react';
import { FiHome, FiSearch, FiShoppingCart, FiHeart, FiBell } from 'react-icons/fi';

import { hooks } from '../hooks';
import { TabScreens } from '../routes';
import { actions } from '../store/actions';

const tabs = [
  {
    id: 1,
    screen: TabScreens.Home,
    icon: <FiHome size={24} />,
  },
  {
    id: 2,
    screen: TabScreens.Menu,
    icon: <FiSearch size={24} />,
  },
  {
    id: 3,
    screen: TabScreens.Order,
    icon: <FiShoppingCart size={24} />,
  },
  {
    id: 4,
    screen: TabScreens.Favorite,
    icon: <FiHeart size={24} />,
  },
  {
    id: 5,
    screen: TabScreens.Notification,
    icon: <FiBell size={24} />,
  },
];

export const Footer: React.FC = () => {
  const dispatch = hooks.useDispatch();

  return (
    <section
      style={{
        padding: 20,
        backgroundColor: 'var(--main-turquoise)',
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <footer
        style={{
          zIndex: 100,
          borderRadius: 10,
          height: 'var(--footer-height)',
          backgroundColor: 'var(--white-color)',
        }}
      >
        <ul
          style={{ height: '100%' }}
          className='row-center-space-around'
        >
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className='clickable center'
                style={{
                  height: '100%',
                  width: 'calc(100% / 5)',
                  borderRadius: 10,
                }}
                onClick={() => dispatch(actions.setScreen(tab.screen))}
              >
                {tab.icon}
              </li>
            );
          })}
        </ul>
      </footer>
    </section>
  );
};