import React from "react";
import styled from "styled-components";

const Section = styled.section`
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
  width: auto;
  list-style: none;
  display: flex;
  height: auto;
  justify-content: space-around;
  flex-direction: row;
  margin: 0;
  padding: 15px;
  flex-wrap: wrap;
`;

const ListElement = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  border: 2px #e395a4;
  border-left-style: dotted;
`;

export default function Statistics({ title, stats }) {
  return (
    <>
      <Section>
        {title !== null && <h2>{title}</h2>}

        <List>
          {stats.map((element) => (
            <ListElement key={element.id}>
              <span>{element.label}</span>
              <span>{element.percentage}</span>
            </ListElement>
          ))}
        </List>
      </Section>
    </>
  );
}

Statistics.defaultProps = {
  stats: [0],
};
