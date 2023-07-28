import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Мои финансы</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
