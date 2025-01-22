import React, { useState } from 'react';
import { hooks } from '../hooks';
import { Routes } from '../routes';
import { svg } from '../assets/svg';
import { components } from '../components';

export const SignIn: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const [opacity, setOpacity] = useState<number>(0);

  hooks.useScrollToTop();
  hooks.useOpacity(setOpacity);
  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const renderHeader = (): JSX.Element => {
    return <components.Header showGoBack={true} />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            backgroundColor: 'var(--white-color)',
            paddingLeft: 20,
            paddingRight: 20,
            height: '100%',
            paddingTop: '22%',
            borderRadius: 10,
          }}
        >
          <h1 style={{marginBottom: 10}}>С возвращением!</h1>
          <span
            className='t16'
            style={{marginBottom: 30, display: 'block'}}
          >
            Войдите, чтобы продолжить
          </span>
          <components.Input
            placeholder='Электронная почта'
            containerStyle={{marginBottom: 14}}
            leftIcon={<svg.MailSvg />}
            rightIcon={<svg.CheckSvg />}
          />
          <components.Input
            placeholder='Пароль'
            leftIcon={<svg.KeySvg />}
            rightIcon={<svg.EyeOffSvg />}
            containerStyle={{marginBottom: 20}}
          />
          <div
            className='row-center-space-between'
            style={{marginBottom: 20}}
          >
            <div
              style={{gap: 10}}
              className='row-center'
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  backgroundColor: '#E6EFF8',
                }}
                className='center'
              >
                {rememberMe && <svg.RememberCheckSvg />}
              </div>
              <span className='t14'>Запомнить меня</span>
            </div>
            <span
              className='t14'
              style={{color: 'var(--main-turquoise)'}}
              onClick={() => {
                navigate(Routes.ForgotPassword);
              }}
            >
              Забыли пароль?
            </span>
          </div>
          <components.Button
            text='Войти'
            containerStyle={{marginBottom: 20}}
            onClick={() => {
              navigate(Routes.TabNavigator);
            }}
          />
          <div
            style={{gap: 4}}
            className='row-center'
          >
            <span className='t14'>Нет аккаунта?</span>
            <span
              className='t14 clickable'
              style={{color: 'var(--main-turquoise)'}}
              onClick={() => {
                navigate(Routes.SignUp);
              }}
            >
              Зарегистрироваться.
            </span>
          </div>
        </section>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <footer
        className='container row-center'
        style={{gap: 15, paddingTop: 10, paddingBottom: 10}}
      >
        <button
          className='center'
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 50,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <svg.FaceBookSvg />
        </button>
        <button
          className='center'
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 50,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <svg.GoogleSvg />
        </button>
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