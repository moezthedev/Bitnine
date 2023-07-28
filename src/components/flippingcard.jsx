import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './flipcard.css'; // Create a CSS file for styling and import it here
import img from "../images/footer-img.png"
const cardData = [
  {
    id: 1,
    frontText: 'Backup/Restore',
    backText: 'provides module for script, SQL job, and scheduling management',
  },
  {
    id: 2,
    frontText: 'DB Monitoring',
    backText: 'enables auditing via user interface',
  },
  {
    id: 3,
    frontText: 'Schedule Management',
    backText: 'provides module for script, SQL job, and scheduling management',
  },
  {
    id: 4,
    frontText: 'Database Audit',
    backText: 'extracts monitoring results in query',
  },
  {
    id: 5,
    frontText: 'SQL Monitoring',
    backText: 'monitors and collects operation status & statistical data',
  },
  {
    id: 6,
    frontText: 'Performance Management',
    backText: 'enables auditing via user interface',
  },
];

const FlippingCards = () => {
  return (
    <div className='sub-footer-container'>
    <div className='sub-footer-img-container'>
      <img src={img} alt="" />
    </div>
    <div className="cards-container">
      
      {cardData.map((card) => (
        <Card key={card.id} className="card">
          <CardContent className="front">
            <Typography variant="h7" component="div" sx={{fontWeight:"bold"}}>
              {card.frontText}
            </Typography>
          </CardContent>
          <CardContent className="back">
            <Typography variant="h5" component="div">
              {card.backText}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default FlippingCards;
