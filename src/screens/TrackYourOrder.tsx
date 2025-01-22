import React, { useState } from 'react';
import { svg } from '../assets/svg';

import { hooks } from '../hooks';
import { components } from '../components';

const progress = [
  {
    id: 1,
    title: 'Заказ подтвержден',
    description: 'Ваш заказ был подтвержден',
    status: 'done',
  },
  {
    id: 2,
    title: 'Заказ готовится',
    description: 'Ожидается в 9:02 вечера',
    status: 'done',
  },
  {
    id: 3,
    title: 'Курьер в пути',
    description: 'Ожидается в 9:12 вечера',
    status: 'pending',
  },
  {
    id: 4,
    title: 'Получение',
    description: 'Ожидается в 9:32 вечера',
    status: 'pending',
  },
];

export const TrackYourOrder: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const [opacity, setOpacity] = useState<number>(0);

  hooks.useScrollToTop();
  hooks.useOpacity(setOpacity);
  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showGoBack={true}
        title='Отследить заказ'
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            padding: 20,
            marginTop: 10,
            borderRadius: 10,
            marginBottom: 10,
            border: '1px solid #00B0B9',
          }}
        >
          <div
            className='row-center'
            style={{gap: 14}}
          >
            <span className='t14'>Ваш заказ:</span>
            <span
              className='t14'
              style={{fontWeight: 500, color: 'var(--main-turquoise)'}}
            >
              456654
            </span>
          </div>
          <div
            className='row-center'
            style={{gap: 14}}
          >
            <span className='t14'>Дата:</span>
            <span
              className='t14'
              style={{fontWeight: 500, color: 'var(--main-turquoise)'}}
            >
              31 августа в 8:32 вечера
            </span>
          </div>
        </section>
        <section
          style={{
            borderRadius: 10,
            padding: 30,
            backgroundColor: 'var(--white-color)',
          }}
        >
          {progress.map((item, index, array) => {
            const isLast = index === array.length - 1;

            return (
              <div
                style={{display: 'flex'}}
                key={item.id}
              >
                <section
                  style={{
                    marginRight: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      marginBottom: isLast ? 0 : 7,
                      backgroundColor:
                        item.status === 'done'
                          ? '#00B0B9'
                          : 'var(--white-color)',
                      border: '1px solid #00B0B9',
                    }}
                    className='center'
                  >
                    {item.status === 'done' && <svg.StatusCheckSvg />}
                  </div>
                  {!isLast && (
                    <div
                      style={{
                        width: 2,
                        height: 30,
                        marginBottom: 6,
                        borderRadius: 1,
                        backgroundColor: '#00B0B9',
                      }}
                    />
                  )}
                </section>
                <section style={{display: 'flex', flexDirection: 'column'}}>
                  <span
                    className='t14'
                    style={{
                      marginBottom: 6,
                      color: 'var(--main-color)',
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </span>
                  <span className='t14'>{item.description}</span>
                </section>
              </div>
            );
          })}
        </section>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <footer style={{padding: 20}}>
        <components.Button text='Чат поддержка' />
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