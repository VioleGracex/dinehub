import React, {useState} from 'react';

import {hooks} from '../hooks';
import {components} from '../components';

const menu = [
  {
    id: 1,
    name: 'Салаты',
  },
  {
    id: 2,
    name: 'Мясо',
  },
  {
    id: 3,
    name: 'Паста',
  },
  {
    id: 4,
    name: 'Десерты',
  },
  {
    id: 5,
    name: 'Напитки',
  },
  {
    id: 6,
    name: 'Супы',
  },
  {
    id: 7,
    name: 'Закуски',
  },
];

const preferences = [
  {
    id: 1,
    name: 'Вегетарианское',
  },
  {
    id: 2,
    name: 'Веганское',
  },
  {
    id: 3,
    name: 'Безглютеновое',
  },
  {
    id: 4,
    name: 'Без орехов',
  },
  {
    id: 5,
    name: 'Кето',
  },
  {
    id: 6,
    name: 'Низкокалорийное',
  },
  {
    id: 7,
    name: 'Органическое',
  },
];

export const Filter: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const [opacity, setOpacity] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState('острое');
  const [selectedMenu, setSelectedMenu] = useState(menu[1].name);
  const [selectedPreferences, setSelectedPreferences] = useState(
    preferences[3].name,
  );

  hooks.useScrollToTop();
  hooks.useOpacity(setOpacity);
  hooks.useThemeColor('#F6F9F9', '#F6F9F9', dispatch);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Фильтр'
        showGoBack={true}
      />
    );
  };

  const renderCategories = (): JSX.Element => {
    return (
      <section style={{marginBottom: 30}}>
        <ul style={{display: 'flex', alignItems: 'center', gap: 8}}>
          {['новое', 'острое'].map((category, index) => {
            return (
              <li
                key={index}
                style={{
                  padding: '10px 20px',
                  backgroundColor:
                    selectedCategory === category
                      ? 'var(--main-turquoise)'
                      : '#E9F3F6',
                  borderRadius: 10,
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <span
                  className='t14'
                  style={{
                    color:
                      selectedCategory === category
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                  }}
                >
                  {category}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <section style={{marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Категории</h5>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {menu.map((menu: any, index: number) => {
            return (
              <button
                key={menu.id}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  backgroundColor:
                    selectedMenu === menu.name
                      ? 'var(--main-turquoise)'
                      : '#E9F3F6',
                }}
                onClick={() => {
                  setSelectedMenu(menu.name);
                }}
              >
                <h5
                  style={{
                    color:
                      selectedMenu === menu.name
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    fontWeight: 500,
                  }}
                >
                  {menu.name}
                </h5>
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  const renderDietaryPreferences = (): JSX.Element => {
    return (
      <section style={{marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Диетические предпочтения</h5>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {preferences.map((preference: any, index) => {
            return (
              <li
                key={preference.id}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  backgroundColor:
                    selectedPreferences === preference.name
                      ? 'var(--main-turquoise)'
                      : '#E9F3F6',
                }}
                onClick={() => {
                  setSelectedMenu(preference.name);
                }}
              >
                <button
                  className='t14'
                  style={{
                    color:
                      selectedPreferences === preference.name
                        ? 'var(--white-color)'
                        : 'var(--main-color)',
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    setSelectedPreferences(preference.name);
                  }}
                >
                  {preference.name}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <section>
        <components.Button
          text='Применить фильтры'
          onClick={() => {
            navigate(-1);
          }}
          containerStyle={{marginBottom: 10}}
        />
        <components.Button
          text='Сбросить фильтры'
          colorScheme='secondary'
          onClick={() => {
            setSelectedCategory('острое');
            setSelectedMenu(menu[1].name);
            setSelectedPreferences(preferences[3].name);
          }}
        />
      </section>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            backgroundColor: 'var(--white-color)',
            paddingTop: '10%',
            borderRadius: 10,
            paddingBottom: '10%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {renderCategories()}
          {renderMenu()}
          {renderDietaryPreferences()}
          {renderButtons()}
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