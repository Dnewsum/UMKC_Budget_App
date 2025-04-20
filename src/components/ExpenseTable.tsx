import React from 'react'
import { Table } from 'flowbite-react'

export interface Expense {
  id: number
  price: number
  seller: string
  date: string
}

// your data (you can also move this into its own `data/expenses.ts` if you like)
const expenses: Expense[] = [
  { id: 1, price: 45.99, seller: 'Amazon',    date: '2024-06-01' },
  { id: 2, price: 12.5,  seller: 'Starbucks', date: '2024-06-03' },
  { id: 3, price: 120.0, seller: 'Best Buy',  date: '2024-06-05' },
  { id: 4, price: 8.75,  seller: 'Walmart',   date: '2024-06-07' },
]

// helpers (you can also move these out to `utils/` if you prefer)
const getPriceColor = (price: number) => {
  if (price > 100) return 'text-red-600'
  if (price > 50)  return 'text-orange-500'
  if (price > 20)  return 'text-yellow-500'
  return 'text-green-600'
}

const getSellerColor = (seller: string) => {
  const colors: Record<string,string> = {
    Amazon:    'bg-yellow-100 text-yellow-800',
    Starbucks: 'bg-green-100  text-green-800',
    'Best Buy':'bg-blue-100   text-blue-800',
    Walmart:   'bg-purple-100 text-purple-800',
  }
  return colors[seller] || 'bg-gray-100 text-gray-800'
}

const ExpenseTable: React.FC = () => (
  <div className="max-w-3xl mx-auto mt-10 p-6 bg-amber-400 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
      Your Spending Habits
    </h2>
    <Table hoverable className="w-full">
      <thead>
        <tr>
          <th className="text-lg px-6 py-3 text-left">Price</th>
          <th className="text-lg px-6 py-3 text-left">Seller</th>
          <th className="text-lg px-6 py-3 text-left">Date</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {expenses.map(expense => (
          <tr key={expense.id} className="bg-white hover:bg-gray-50">
            <td className={`font-semibold px-6 py-4 ${getPriceColor(expense.price)}`}>
              ${expense.price.toFixed(2)}
            </td>
            <td className="px-6 py-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSellerColor(expense.seller)}`}>
                {expense.seller}
              </span>
            </td>
            <td className="px-6 py-4">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {new Date(expense.date).toLocaleDateString()}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

export default ExpenseTable
