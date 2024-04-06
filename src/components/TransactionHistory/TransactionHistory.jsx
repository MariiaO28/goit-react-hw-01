import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.header}> 
                <tr>
                    <th className={css.headerName}>Type</th>
                    <th className={css.headerName}>Amount</th>
                    <th className={css.headerName}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tbody}>
               {items.map((item) => (
                <tr className={css.transaction} key={item.id}>
                       <td className={css.transactionItem}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>   
                       <td className={css.transactionItem}>{item.amount}</td>  
                       <td className={css.transactionItem}>{item.currency}</td>  
                </tr>
            ))}
            </tbody>
        </table>
    )
}