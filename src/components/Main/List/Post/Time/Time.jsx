import style from './Time.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';
import {Text} from '../../../../../UI/Text';


export const Time = ({date}) => (
  <Text As='time'
    size={10}
    tsize={16}
    fweight='bold'
    color='grey99'
    className={style.date}
    dateTime={date}>{formatDate(date)}</Text>
);

Time.propTypes = {
  date: PropTypes.string,
};

