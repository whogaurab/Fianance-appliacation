// src/components/NewsSection.jsx
import React from 'react';
import './NewsSection.css';

const newsArticles = [
  { id: 1, title: 'Drag and Drop Functionality', date: 'October 15, 2024', summary: 'Learn more about...' },
  { id: 2, title: 'New Bank Regulations', date: 'October 16, 2024', summary: 'Important updates...' },
  { id: 3, title: 'How to Save Money', date: 'October 17, 2024', summary: 'Best tips to save...' },
];

const NewsSection = () => {
  return (
    <section className="news">
      <h2>Your News and Information</h2>
      <div className="news-grid">
        {newsArticles.map(article => (
          <div key={article.id} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.date}</p>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
