import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/menuItemStyles';
import calculatePizzaPrice from '../utils/calcuatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        // use single order id to lookup selected pizza info
        const singlePizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={singlePizza.image.asset.fluid} />
            <h2>{singlePizza.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(singlePizza.price, singleOrder.size)
              )}
              <button
                type="button"
                className="remove"
                // screen reader accessible title, used to read button purpose to user when button has no label -- ours is only using a unicode character "x" to remove items
                title={`Remove ${singleOrder.size} ${singlePizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
