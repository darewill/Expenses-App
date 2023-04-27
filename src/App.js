//import logo from './logo.svg';
import React, { useState } from 'react';
import "./App.css";
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Patika te Reja",
    amount: 150,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Sigurimi i Kerrit",
    amount: 350,
    date: new Date(2023, 7, 15),
  },
  {
    id: "e3",
    title: "Tavolin e Re (nga druri)",
    amount: 199.99,
    date: new Date(2022, 10, 24),
  },
  {
    id: "e4",
    title: "Televizor i Ri",
    amount: 789.99,
    date: new Date(2022, 5, 9),
  },
];



function App (){

 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      });
  };
  
  return (
  <div className="App">
  
    <header className="App-header">
      
      <NewExpense onAddExpense={addExpenseHandler}/>
        
      <Expenses 
        items={expenses}
      />  
    
    </header>
  
  </div>
  );
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />
