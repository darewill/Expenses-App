import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart (props) {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Shk', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Pri', value: 0},
        {label: 'Maj', value: 0},
        {label: 'Qer', value: 0},
        {label: 'Kor', value: 0},
        {label: 'Gus', value: 0},
        {label: 'Sht', value: 0},
        {label: 'Tet', value: 0},
        {label: 'Nen', value: 0},
        {label: 'Dhj', value: 0},
        
    ];

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //fillon prej 0 ==> janari osht 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;