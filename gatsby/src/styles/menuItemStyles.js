import styled from 'styled-components';

const MenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  justify-content: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.5rem;
  }

  button + button {
    margin-left: 1em;
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3em;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    box-shadow: 1rem;
  }
`;

export default MenuItemStyles;
