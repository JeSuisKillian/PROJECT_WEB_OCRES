import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '14',
        Hamilton: 221.5,
        Verstappen: 226.5,
        amt: 100,
    },
    {
        name: '15',
        Hamilton: 246.5,
        Verstappen: 244.5,
        amt: 2400,
    },
    {
        name: '16',
        Hamilton: 256.5,
        Verstappen: 262.5,
        amt: 2210,
    },
    {
        name: '17',
        Hamilton: 275.5,
        Verstappen: 287.5,
        amt: 2290,
    },
    {
        name: '18',
        Hamilton: 293.5,
        Verstappen: 312.5,
        amt: 2000,
    },
    {
        name: '19',
        Hamilton: 318.5,
        Verstappen: 332.5,
        amt: 2181,
    },
    {
        name: '20',
        Hamilton: 343.5,
        Verstappen: 351.5,
        amt: 2500,
    },
    {
        name: '21',
        Hamilton: 343.5,
        Verstappen: 351.5,
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