import style from './BtnDel.module.css';
import {ReactComponent as Icon} from './img/delete.svg';


export const BtnDel = () => (
  <button className={style.delete}>
    <Icon />
  </button>
);
