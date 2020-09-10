import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 15px;
  background-color: #b8dae1;
  width: 300px;
  height: auto;
  font: sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  box-shadow: 10px 20px 13px 3px rgba(217, 208, 217, 0.88);
  margin: 40px;
`;

const List = styled.ul`
  background-color: #7fa2ec;
  list-style: none;
  display: flex;
  height: auto;
  justify-content: space-between;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  text-align: center;
  padding: 15px;
`;

export default function Profile({ name, avatar, tag, location, stats }) {
  return (
    <>
      <Wrapper>
        <div>
          <img src={avatar} alt="user avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <List>
          <ListItem>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </ListItem>
          <ListItem>
            <span>Views</span>
            <span>{stats.views}</span>
          </ListItem>
          <ListItem>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </ListItem>
        </List>
      </Wrapper>
    </>
  );
}

Profile.defaultProps = {
  name: "User Name",
  tag: "some_tag",
  avatar: "https://picsum.photos/200",
  location: "Somwhere on Earth",
  stats: 0,
};
