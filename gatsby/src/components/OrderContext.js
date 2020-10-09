import React, { useState, useEffect, createContext } from 'react';

export const OrderContext = createContext();

// set global variables here....

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}
