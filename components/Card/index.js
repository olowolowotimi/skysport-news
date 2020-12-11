import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import cardStyle from './style/Card.module.css';





export default function NewsCard(props) {
  

  return (
   
      <Card  variant="outlined"id={cardStyle.allCards}>
        {props.children}
      </Card>
    
  );
}

NewsCard.propTypes = { 
  children: PropTypes.node.isRequired
}
