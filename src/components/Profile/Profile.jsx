import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.userBox}>
        <img className={css.image} src={image} alt='User avatar' />
        <p className={css.name}>{name}</p>
        <p className={css.paragraph}>@{tag}</p>
        <p className={css.paragraph}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
