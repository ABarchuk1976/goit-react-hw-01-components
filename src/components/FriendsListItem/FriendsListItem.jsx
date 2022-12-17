import PropTypes from 'prop-types';
import * as styledComps from 'components/FriendsListItem/styledFriendListItem.jsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const { Friend, Status, Avatar, FriendName } = styledComps;
  return (
    <Friend>
      <Status statusColor={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="60" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
