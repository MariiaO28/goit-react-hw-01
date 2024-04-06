import css from './Profile.module.css'

export default function Profile ({name, tag, location, image, stats}) {
    return (
        <div className={css.card}>
            <div className={css.profileInfo}>
                <img className={css.image} src={image} alt="User avatar" width="250"/>
                <p className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsInfo}>
                    <span>Followers </span>
                    <span className={css.data}>{stats.followers}</span>
                </li>
                <li className={css.statsInfo}>
                    <span>Views </span>
                    <span className={css.data}>{stats.views}</span>
                </li>
                <li className={css.statsInfo}>
                    <span>Likes </span>
                    <span className={css.data}>{stats.likes}</span>
                </li>
            </ul>
     </div>
 )
}


