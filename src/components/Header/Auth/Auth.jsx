import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {URL_API} from '../../../api/const';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(style.logout);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 401) {
          localStorage.setItem('bearer', '');
        }
        return response;
      })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  const handleLogout = () => {
    setLogout(style.active);
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
