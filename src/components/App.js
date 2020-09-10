import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import FriendList from "./FriendList";
import friends from "./freinds.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
