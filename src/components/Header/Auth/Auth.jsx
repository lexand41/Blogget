import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Icon} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth : <Icon className={style.svg} />}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.string,
};
