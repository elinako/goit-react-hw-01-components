import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 15px;
  background-color: #9de1af;
  width: 600px;
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

const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 500px;

  margin: 0 auto;
  border-bottom: 2px solid white;
`;

const TableElement = styled.td`
  width: 100px;
  height: 30px;
`;

const TableHeadElement = styled.th`
  width: 100px;
`;

export default function TransactionHistory({ items }) {
  return (
    <>
      <Section>
        <table>
          <thead>
            <TableRow>
              <TableHeadElement>Type</TableHeadElement>
              <TableHeadElement>Amount</TableHeadElement>
              <TableHeadElement>Currency</TableHeadElement>
            </TableRow>
          </thead>

          <tbody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableElement>{item.type}</TableElement>
                <TableElement>{item.amount}</TableElement>
                <TableElement>{item.currency}</TableElement>
              </TableRow>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
}

TransactionHistory.defaultProps = {
  type: "some transaction",
  amount: 0,
  currency: "units",
};
