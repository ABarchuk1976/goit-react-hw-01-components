import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FriendList = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <StyledList key={id}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    </StyledList>
  ));

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Friend>
    {isOnline ? <IsOnline /> : <NotOnline />}
    <Avatar src={avatar} alt="User avatar" width="60" />
    <FriendName>{name}</FriendName>
  </Friend>
);

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-decoration: none;
  margin-bottom: 32px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

const Friend = styled.li`
  display: flex;
  align-items: center;
  min-width: 430px;
  margin: 0;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.5);
`;

const IsOnline = styled.span`
  display: block;
  margin: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: green;
  margin-right: 10px;
`;

const NotOnline = styled(IsOnline)`
  background-color: red;
`;

const Avatar = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

const FriendName = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: black;
  margin: 0;
  padding: 0;
`;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
