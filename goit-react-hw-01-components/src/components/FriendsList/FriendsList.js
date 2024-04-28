import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import { ListItem, List } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <ListItem key={id}>
            <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
          </ListItem>
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
