import styled from 'styled-components';

export const Friend = styled.li`
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

export const Status = styled.span`
  display: block;
  margin: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => (props.statusColor ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: black;
  margin: 0;
  padding: 0;
`;
