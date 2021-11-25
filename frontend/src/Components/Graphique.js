import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'juin 2021',
        likes: 4000,
        abos: 2400,
        amt: 2400,
    },
    {
        name: 'juillet 2021',
        likes: 3000,
        abos: 1398,
        amt: 2210,
    },
    {
        name: 'aout 2021',
        likes: 2000,
        abos: 9800,
        amt: 2290,
    },
    {
        name: 'septembre 2021',
        likes: 2780,
        abos: 3908,
        amt: 2000,
    },
    {
        name: 'octobre 2021',
        likes: 1890,
        abos: 4800,
        amt: 2181,
    },
    {
        name: 'novembre 2021',
        likes: 2390,
        abos: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        likes: 3490,
        abos: 4300,
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
                    <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="abos" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default Graphique