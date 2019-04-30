import { connect } from 'react-redux'
import React, { Component } from 'react'

class UnconnectedSearch extends Component {

   handleQuery = evt => {
      this.props.dispatch({ type: 'query', q: evt.target.value })
   }

   handleMinimumPrice = evt => {
      //Check if user has cleared the string, it must remain a number!
      if (event.target.value === "") {
         this.props.dispatch({ type: 'minimum-price', price: 0 })
         return;
      }
      let price = parseInt(evt.target.value)
      this.props.dispatch({ type: 'minimum-price', price: price })
   }

   handleMaximumPrice = evt => {
      if (event.target.value === "") {
         this.props.dispatch({ type: 'minimum-price', price: 0 })
         return;
      }
      let price = parseInt(evt.target.value)
      this.props.dispatch({ type: 'maximum-price', price: price })
   }

   handleInStock = event => {
      if (event.target.value === "on") {
         this.props.dispatch({ type: 'change-instock' })
         // console.log("Event recognized!")
      }
   }

   render = () => {
      return (
         <div>
            <div>
               Search query
               <input type="text" onChange={this.handleQuery} value={this.props.query} />
            </div>
            <div>
               Minimum price
               <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} />
            </div>
            <div>
               Maximum price
               <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} />
            </div>
            <div>
               Out of stock items?
               <input type="checkbox" onChange={this.handleInStock} />
            </div>
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

let Search = connect(mapStateToProps)(UnconnectedSearch)

export default Search 
