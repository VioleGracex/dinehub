import React, {useState} from 'react';

import {hooks} from '../hooks';
import {actions} from '../store/actions';
import {components} from '../components';
import {Routes, TabScreens} from '../routes';

export const OrderHistoryEmpty: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const [opacity, setOpacity] = useState<number>(0);

  hooks.useScrollToTop();
  hooks.useOpacity(setOpacity);
  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showGoBack={true}
        title='История заказов'
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            borderRadius: 10,
            backgroundColor: 'var(--white-color)',
            flexDirection: 'column',
          }}
          className='center'
        >
          <img
            src='https://george-fx.github.io/dinehub_api/assets/images/10.jpg'
            alt='Аккаунт создан'
            className='status-img'
            style={{marginBottom: 14}}
          />
          <h2 style={{marginBottom: 14}}>Истории заказов пока нет!</h2>
          <p
            className='t16'
            style={{textAlign: 'center'}}
          >
            Похоже, история ваших заказов пуста. <br /> Оформите заказ
            сейчас, чтобы начать создавать <br /> свою историю!
          </p>
        </section>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <footer style={{padding: 20}}>
        <components.Button
          text='Начать покупки'
          onClick={() => {
            dispatch(actions.setScreen(TabScreens.Home));
            navigate(Routes.TabNavigator);
          }}
        />
      </footer>
    );
  };

  return (
    <div
      id='screen'
      style={{opacity}}
    >
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
};
