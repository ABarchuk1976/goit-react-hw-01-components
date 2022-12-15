import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import styled from 'styled-components';
import './index.css';
import { Profile } from './components/profile/profile.jsx';
import user from './components/profile/user.json';
import { Statistics } from 'components/statistics/statistics';
import data from './components/statistics/data.json';
import { FriendList } from 'components/friends-list/friends-list';
import friends from './components/friends-list/friends.json';

const Divider = styled.h3`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
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
    <Divider>---- Part 5 ----</Divider>
  </>
);
