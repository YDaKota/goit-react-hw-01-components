import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import style from './FriendList.module.css';

export default function FriendList ({ friends }) {
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
};