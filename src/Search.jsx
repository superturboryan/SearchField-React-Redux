import { connect } from 'react-redux'
import React, { Component } from 'react'

class UnconnectedSearch extends Component {

   handleQuery = evt => {
      this.props.dispatch({ type: 'query', q: evt.target.value })
   }

   handleMinimumPrice = evt => {
      //Check if user has cleared the string, it must remain a number!
      if (event.target.value === "" || event.target.value === NaN) {
         this.props.dispatch({ type: 'minimum-price', price: 0 })
         return;
      }
      let price = parseInt(evt.target.value)
      this.props.dispatch({ type: 'minimum-price', price: price })
   }

   handleMaximumPrice = evt => {
      if (event.target.value === "" || event.target.value === NaN) {
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

   handleClearFields = () => {
      this.props.dispatch({ type: "clear-fields" })
   }

   showHideField = () => {
      let minPrice = document.getElementById("minPrice")
      let maxPrice = document.getElementById("maxPrice")

      minPrice.classList.toggle("hidden")
      maxPrice.classList.toggle("hidden")
   }

   render = () => {
      return (
         <div>
            <div>
               Search query
               <input type="text" onChange={this.handleQuery} value={this.props.query} />
            </div>
            <button onClick={this.showHideField}> Show/Hide Price </button>
            <div id="minPrice">
               Minimum price
               <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} />
            </div>
            <div id="maxPrice">
               Maximum price
               <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} />
            </div>
            <div>
               In stock only?
               <input type="checkbox" onChange={this.handleInStock} checked={this.props.inStock} />
            </div>
            <button onClick={this.handleClearFields}>Clear!</button>
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
