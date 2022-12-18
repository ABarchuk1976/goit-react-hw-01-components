import PropTypes from 'prop-types';
import * as styledComps from 'components/FriendsList/styledFriendList.jsx';
import FriendListItem from 'components/FriendsListItem/FriendsListItem.jsx';

const FriendList = ({ friends }) => {
  const { StyledList } = styledComps;
  return (
    <StyledList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </StyledList>
  );
};

// eslint-disable-next-line react/no-typos
FriendList.PropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
