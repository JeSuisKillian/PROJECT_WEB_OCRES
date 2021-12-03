import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '06/21',
        Hamilton: 4000,
        Verstappen: 2400,
        amt: 2400,
    },
    {
        name: '07/21',
        Hamilton: 3000,
        Verstappen: 1398,
        amt: 2210,
    },
    {
        name: '08/21',
        Hamilton: 2000,
        Verstappen: 9800,
        amt: 2290,
    },
    {
        name: '09/21',
        Hamilton: 2780,
        Verstappen: 3908,
        amt: 2000,
    },
    {
        name: '10/21',
        Hamilton: 1890,
        Verstappen: 4800,
        amt: 2181,
    },
    {
        name: '11/21',
        Hamilton: 2390,
        Verstappen: 3800,
        amt: 2500,
    },
    {
        name: '12/21',
        Hamilton: 3490,
        Verstappen: 4300,
        amt: 2100,
    },
];


class Graphique extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Hamilton" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Verstappen" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default Graphique