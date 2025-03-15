import React from 'react';
import './NewsCard.css';

function NewsCard({ image, category, title, description, date, comments, isLarge }) {
  return (
    <div className={`news-card ${isLarge ? 'news-card-large' : ''}`}>
      <div className="news-card-img" style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}>
        <div className="news-card-category">{category}</div>
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-desc">{description}</p>
        <div className="news-card-meta">
          <span className="news-card-date">
            <i className="far fa-calendar-alt"></i> {date || 'Março 14, 2025'}
          </span>
          {comments !== undefined && (
            <span className="news-card-comments">
              <i className="far fa-comment"></i> {comments}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;