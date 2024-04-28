import PropTypes from 'prop-types';
import { FriendName, Status, Avatar } from './FriendsListItem.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="60" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;
