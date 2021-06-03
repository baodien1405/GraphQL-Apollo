import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => (
  <Query>
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
  </Query>
);

export default CartIconContainer;
