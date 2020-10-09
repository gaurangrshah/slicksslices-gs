import React from 'react';
import SEO from '../components/SEO';

const FourOhFourPage = ({ pageContext }) => (
  <>
    <SEO
      location
      description
      title={
        pageContext?.topping
          ? `Pizzas With ${pageContext?.topping}`
          : `All Pizzas`
      }
    />
    <p>This da 404! son. </p>
  </>
);

export default FourOhFourPage;
