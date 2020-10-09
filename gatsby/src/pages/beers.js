import React from 'react';
import { graphql } from 'gatsby';
import BeerList from '../components/BeerList';
import SEO from '../components/SEO';

const BeersPage = ({ data }) => {
  const beers = data.beers.nodes;

  return (
    <>
      <SEO
        location
        description
        title={`Beers! Over ${data.beers.nodes.length} beers available `}
      />
      <h2 className="center">
        We have {data.beers.nodes.length} Beers Avaialble. Dine in Only!
      </h2>

      <BeerList beers={beers} />
    </>
  );
};

export default BeersPage;

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        image
        price
        name
        rating {
          reviews
          average
        }
      }
    }
  }
`;
