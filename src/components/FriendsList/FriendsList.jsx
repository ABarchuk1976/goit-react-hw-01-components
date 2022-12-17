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
  friends: PropTypes.objectOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
