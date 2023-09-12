import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';


export const Auth = ({token, delToken}) => {
  const [logout, setLogout] = useState(style.logout);
  const auth = useAuth(token);

  const handleLogout = () => {
    if (logout === style.logout) {
      setLogout(style.active);
    } else {
      setLogout(style.logout);
    }
  };

  const handleCloseLogout = () => {
    setLogout(style.logout);
    delToken();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleLogout}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      <button className={logout} onClick={handleCloseLogout}>Выйти</button>
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
