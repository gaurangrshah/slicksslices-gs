/* eslint-disable jsx-props-no-spreading */

import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
