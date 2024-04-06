import css from './FriendListItem.module.css'
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClassName = clsx(css.text, isOnline ? css.Online : css.Offline)
    
    return (
        <div className ={css.card}>
            <img src={avatar} alt="Avatar" width="80" />
            <p className={css.text}>{name}</p>
            <p className={statusClassName}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}