import React from 'react'

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {props.transactions.map(tran => {
          return <tr key={tran.id}><td>{tran.posted_at}</td><td>{tran.description}</td><td>{tran.category}</td><td>{tran.amount}</td></tr>
        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
