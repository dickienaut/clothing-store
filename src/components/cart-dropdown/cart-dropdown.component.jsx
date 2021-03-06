import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { selectCartItems } from '../../redux/cart/cart.selectors.js'
import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
