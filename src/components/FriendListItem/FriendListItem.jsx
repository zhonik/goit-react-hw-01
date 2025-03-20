import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.thumbFriend}>
      <img className={css.image} src={avatar} alt='Avatar' width='48' />
      <p className={css.user}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.online, css.status)}>Online</p>
      ) : (
        <p className={clsx(css.offline, css.status)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
