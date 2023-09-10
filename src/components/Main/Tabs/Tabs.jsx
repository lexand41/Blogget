import style from './Tabs.module.css';
// import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './icons/home.svg';
import {ReactComponent as TopIcon} from './icons/top.svg';
import {ReactComponent as BestIcon} from './icons/best.svg';
import {ReactComponent as HotIcon} from './icons/hot.svg';

import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';


const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [addItem, setAddItem] = useState('Add Item');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {addItem}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <button className={style.btn} onClick={() => setAddItem(value)}>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

// Tabs.propTypes = {
//   list: PropTypes.array,
//   setList: PropTypes.func,
//   addItem: PropTypes.func,
// };

