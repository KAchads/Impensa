import React from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import ToggleNewExpense from "../../components/ModalTemplates/NewExpense";
import LineGraph from "../../components/Data Visualization/linegraph";
import moment from "moment";
// Wraps Sidebar Nav and Main-Conent
import { DataContainer, ExpenseCategory } from "./style";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExpenseString = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 2px solid ${theme.bg.lightestBlue};
  gap: 20px;
  align-items: center;
  display: flex;
`;

export const ExpenseDate = styled.div`
  position: relative;
  font-size: 0.7em;
  font-weight: 550;
  color: grey;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

// Has all Main-block elements
export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Heading = styled.h3`
padding:0;
margin-top:0;
margin-bottom:20px;
  }
`;

export const ExpenseContainer = ({ expenses, currency, heading, obj }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      {obj.map((expense) => (
        <ExpenseString key={expense.expense_id}>
          <ColumnContainer>
            {`${currency} ${expense.expense_amount}`}
            <ExpenseDate>
              {moment.utc(expense.expense_date).format("MMM Do, YYYY")}
            </ExpenseDate>
          </ColumnContainer>
          <ExpenseCategory>{expense.expense_category}</ExpenseCategory>
        </ExpenseString>
      ))}
    </>
  );
};

const Main = ({ expenses, currency }) => {
  console.log(expenses);
  // 4 - 5 0 ---> 0 expense.slice 0
  // removes elements from the beginning should not do that should remove from the end instead
  const newobj = expenses.slice(Math.max(expenses.length - 5, 0));
  // reducing object's size to the last 5 elements
  console.log(expenses);
  return (
    <Container>
      <DataContainer>
        <ExpenseContainer
          obj={newobj}
          expenses={expenses}
          currency={currency}
          heading={"Recently spent"}
        />
        <ButtonContainer>
          <ToggleNewExpense />
        </ButtonContainer>
      </DataContainer>
      <DataContainer>
        <LineGraph currency={currency} expenses={expenses} />
      </DataContainer>
    </Container>
  );
};

export default Main;
