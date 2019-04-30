import { connect } from 'react-redux'
import React, { Component } from 'react'
import data from './data.js'

class UnconnectedSearchResults extends Component {
   render = () => {
      let results = data.filter(item => {
         return item.name.includes(this.props.query)
      })

      results = results.filter(item => {
         return this.props.minPrice < item.price
      })

      results = results.filter(item => {
         return this.props.maxPrice > item.price
      })

      if (this.props.inStock) {

         results = results.filter(item => {
            return item.inStock
         })
      }

      return (<div>
         {results.map(r => {
            return (
               <div>
                  <h3>{r.name}</h3>
                  <div>Price: ${r.price}</div>
                  <div>Description: {r.description}</div>
                  <div>In stock? {r.inStock ? "Yes" : "No"}</div>
               </div>
            )
         })}
      </div>)
   }
}
let mapStateToProps = st => {
   return {
      query: st.searchQuery,
      minPrice: st.min,
      maxPrice: st.max,
      inStock: st.inStock
   }
}
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults)
export default SearchResults  
