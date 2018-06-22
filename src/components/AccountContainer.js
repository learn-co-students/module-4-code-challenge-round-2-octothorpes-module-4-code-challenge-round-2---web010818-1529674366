import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchTerm: "",
      filteredTransactions: []
    }

  }

  dataFetcher = () => {
    fetch(' https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json
    }))
  }

  handleChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value
      }, this.transFilter()
    )
  }

  transFilter= () => {
    const wantedTrans = this.state.transactions.filter(t => {
      return t.description.includes(this.state.searchTerm) || t.category.includes(this.state.searchTerm)
    })
    this.setState({
      filteredTransactions: wantedTrans
    }, console.log(this.state.filteredTransactions))
  }

  componentDidMount(){
    this.dataFetcher()
  }

  render() {

    return (
      <div>
        <Search changeHandler={this.handleChange} />
        {this.state.filteredTransactions.length === 0 || this.state.searchTerm === "" ? <TransactionsList transactions={this.state.transactions}/> : <TransactionsList transactions={this.state.filteredTransactions}/>}
      </div>
    )
  }
}

export default AccountContainer
