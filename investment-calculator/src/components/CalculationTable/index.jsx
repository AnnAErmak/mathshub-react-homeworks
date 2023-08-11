import React from "react";
import './style.css';

function CalculationTable({calculations}) {
    console.log(calculations)
    return (
        <table className='result'>
            <thead>
            <tr>
                <th>Год</th>
                <th>Общие накопления</th>
                <th>Накопления с процентов (в год)</th>
                <th>Всего с процентов</th>
                <th>Всего инвестировано</th>
            </tr>
            </thead>
            <tbody>
            {calculations.map(item => item.map((el, idx) => (
                    <tr key={idx}>
                        <td>{new Date().getFullYear() + el.year}</td>
                        <td>$ {el.savingsEndOfYear.toFixed(2)}</td>
                        <td>$ {el.yearlyInterest.toFixed(2)}</td>
                        <td>$ {el.totalContributed.toFixed(2)}</td>
                        <td>$ {el.yearlyContribution.toFixed(2)}</td>
                    </tr>
                ))

            )
            }
            </tbody>
        </table>
    )
}

export default CalculationTable