import React from "react";
import './style.css';

function CalculationTable ({calculations}){
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
            <tr>
                <td>2023</td>
                <td>$ 11 700</td>
                <td>$ 500</td>
                <td>$ 500</td>
                <td>$ 11 200</td>
            </tr>
            </tbody>
        </table>
    )
}

export default CalculationTable