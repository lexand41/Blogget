import style from './Post.module.css';
import PropTypes from 'prop-types';
import {BtnDel} from './BtnDel/BtnDel';
import {UserPhoto} from './UserPhoto/UserPhoto';
import {Time} from './Time/Time';
import {Rating} from './Rating/Rating';
import {Content} from './Content/Content';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <UserPhoto title={title} />
      <Content title={title} author={author}/>
      <Rating ups={ups} />
      <Time date={date}/>
      <BtnDel />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
