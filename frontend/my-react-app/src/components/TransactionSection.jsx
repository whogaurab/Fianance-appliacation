// src/components/TransactionSection.jsx
import React from 'react';
import './style/TransactionSection.css';

const transactions = [
  { id: 1, amount: '$8,995.00', date: 'October 15, 2024', description: 'Online Transfer' },
  { id: 2, amount: '$5,125.00', date: 'October 16, 2024', description: 'Bank Deposit' },
  { id: 3, amount: '$2,345.00', date: 'October 17, 2024', description: 'Withdrawal' },
];

const TransactionSection = () => {
  return (
    <section className="transactions">
      <h2>Recent Transactions</h2>
      <div className="transaction-list">
        {transactions.map(transaction => (
          <div key={transaction.id} className="transaction-item">
            <p><strong>{transaction.amount}</strong></p>
            <p>{transaction.date}</p>
            <p>{transaction.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransactionSection;
