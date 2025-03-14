import React, {useState} from 'react';

import {hooks} from '../hooks';
import {Routes} from '../routes';
import {svg} from '../assets/svg';
import {components} from '../components';

export const VerifyYourPhoneNumber: React.FC = () => {
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
        title='Проверить номер'
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            backgroundColor: 'var(--white-color)',
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 10,
            paddingBottom: 30,
            paddingTop: 30,
            marginTop: 10,
          }}
        >
          <p
            className='t16'
            style={{marginBottom: 30}}
          >
           Мы отправили вам СМС с кодом на номер +17 0123456789.
          </p>
          <components.Input
            leftIcon={<svg.PhoneSvg />}
            placeholder='Введите номер телефона'
            containerStyle={{marginBottom: 14}}
          />
          <components.Button
            text='подтверждать'
            containerStyle={{marginBottom: 20}}
            onClick={() => {
              navigate(Routes.ConfirmationCode);
            }}
          />
        </section>
      </main>
    );
  };

  return (
    <div
      id='screen'
      style={{opacity}}
    >
      {renderHeader()}
      {renderContent()}
    </div>
  );
};
