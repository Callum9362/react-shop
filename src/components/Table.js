import React, { Component } from 'react'

class Table extends Component {
  render() {
    
    const { items, removeItem } = this.props

    return (
      <div className='relative rounded-xl overflow-auto'>
        <div className='shadow-sm overflow-hidden my-8'>
          <table className='border-collapse table-auto w-full text-sm'>
              <TableHeader />
              <TableBody items={items} removeItem={removeItem}/>
          </table>
        </div>
      </div>
    )
  }
}


const TableHeader = () => {
  return (
    <thead>
    <tr>
      <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Name</th>
      <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Price</th>
      <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'></th>
    </tr>
  </thead>
  )
}

const TableBody = (props) => {

  const rows = props.items.map((row, index) => {

  return (
      <tr>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
          { row.name }
          </td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
          { row.price }
          </td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
          <button onClick={() => props.removeItem(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody className='bg-white dark:bg-slate-800'>{rows}</tbody>
}

export default Table