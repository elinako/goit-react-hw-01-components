import React from "react";
import styled from "styled-components";

const List = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin: 15;
`;

const ListElement = styled.li`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  height: 50px;
  box-shadow: 10px 5px 13px 3px rgba(217, 208, 217, 0.88);
  margin-bottom: 20px;
`;

const Name = styled.p`
  padding-left: 15px;
`;

const Status = styled.input`
  background: ${(friend) => (friend.isOnline ? "green" : "red")};
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid transparent;
  box-shadow: 2px 2px 2px 2px rgba(217, 208, 217, 0.88);
  border-radius: 50%;
  margin: 10px;
`;

export default function FriendsList({ friends }) {
  return (
    <>
      <List>
        {friends.map((friend) => (
          <ListElement key={friend.id}>
            {friend.isOnline === true ? (
              <Status isOnline></Status>
            ) : (
              <Status></Status>
            )}

            <img src={friend.avatar} alt="" width="48" />
            <Name>{friend.name}</Name>
          </ListElement>
        ))}
      </List>
    </>
  );
}

FriendsList.defaultProps = {
  avatar: "https://picsum.photos/200",
  name: "Friend Name",
};
