import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils.js'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        BuyClothes
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/contact'>Contact</Link>

        {
          currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
          )
          :
          (
          <Link className='option' to='/signin'>Sign In</Link>
          )
        }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  );
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
