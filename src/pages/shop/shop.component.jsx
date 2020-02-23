import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'
import ShopData from './shop.data.js'

class ShopPage extends Component {
  constructor() {
    super()

    this.state = {
      collections: ShopData
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(collection => (
            <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
