import styled from 'styled-components';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import Statistics from 'components/Statistics/Statistics.jsx';
import data from 'components/Statistics/data.json';
import FriendList from 'components/FriendsList/FriendsList.jsx';
import friends from 'components/FriendsList/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx';
import transactions from 'components/TransactionHistory/transactions.json';

const Divider = styled.h3`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
`;

export const App = () => {
  return (
    <>
      <Divider>---- Part 1 ----</Divider>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Divider>---- Part 2 ----</Divider>
      <Statistics title="Upload stats" data={data} />
      <Divider>---- Part 3 ----</Divider>
      <FriendList friends={friends} />
      <Divider>---- Part 4 ----</Divider>
      <TransactionHistory items={transactions} />
      <Divider>---- Finish ----</Divider>
    </>
  );
};
