import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticsData from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <>
      <Section title="Profile section">
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
      </Section>
      <Statistics title="Upload stats" stats={statisticsData} />
      <Section title="Friends list">
        <FriendsList friends={friends} />
      </Section>
      <Section title="Transactions history section">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
