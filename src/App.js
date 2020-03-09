import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SigninAndUp from './pages/signinandup/signinandup.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { setCurrentUser } from './redux/user/user.actions.js'
import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninAndUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
