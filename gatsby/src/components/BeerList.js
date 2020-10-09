import React from 'react';
import styled from 'styled-components';

function BeerList({ beers }) {
  return (
    <BeerGridStyles>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerGridStyles>
  );
}

export default BeerList;

function SingleBeer({ beer }) {
  const rating = Math.round(beer.rating.average);
  return (
    <SingleBeerStyles>
      <img src={beer.image} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.price}</p>
      <p title={`${rating} out of 5 stars`}>
        {`⭐️`.repeat(rating)}
        <span style={{ filter: `grayscale(100%)` }}>
          {`⭐️`.repeat(rating)}
        </span>
        <span>({beer.rating.reviews})</span>
      </p>
    </SingleBeerStyles>
  );
}

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(200px));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  h3,
  p {
    margin: 0;
    max-width: 70%;
    text-align: center;
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;
