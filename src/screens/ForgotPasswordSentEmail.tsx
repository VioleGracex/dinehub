import React, {useState} from 'react';

import {hooks} from '../hooks';
import {Routes} from '../routes';
import {components} from '../components';

export const ForgotPasswordSentEmail: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const [opacity, setOpacity] = useState<number>(0);

  hooks.useScrollToTop();
  hooks.useOpacity(setOpacity);
  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const renderHeader = (): JSX.Element => {
    return <components.Header />;
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
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            src='https://george-fx.github.io/dinehub_api/assets/images/09.jpg'
            alt='email sent'
            className='status-img'
            style={{marginBottom: 14}}
          />
          <h2
            style={{
              textAlign: 'center',
              textTransform: 'capitalize',
              marginBottom: 14,
            }}
          >
            Ваш пароль был <br />
            сброшен!
          </h2>
          <p
            className='t16'
            style={{textAlign: 'center'}}
          >
            Войдите с новым паролем, чтобы <br /> продолжить ваше путешествие.
          </p>
        </section>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <footer style={{padding: 20}}>
        <components.Button
          text='Готово'
          onClick={() => navigate(Routes.SignIn)}
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