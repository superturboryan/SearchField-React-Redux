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

      return (<div>
         {results.map(r => {
            return (<div>{r.name}</div>)
         })}
      </div>)
   }
}
let mapStateToProps = st => {
   return {
      query: st.searchQuery,
      minPrice: st.min,
      maxPrice: st.max
   }
}
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults)
export default SearchResults  
