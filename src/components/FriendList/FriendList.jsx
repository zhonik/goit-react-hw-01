import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const friendItem = friends.map(friend => {
    return (
      <li key={friend.id} className={css.friendItem}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={css.friendList}>{friendItem}</ul>;
};

export default FriendList;
