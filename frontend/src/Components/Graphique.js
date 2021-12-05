import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

class Graphique extends PureComponent {
    state = {
        results: []
    }

    componentDidMount() {
        axios.all([axios.get(`https://ergast.com/api/f1/drivers/hamilton/driverstandings.json`), axios.get(`https://ergast.com/api/f1/drivers/max_verstappen/driverstandings.json`)]).then(axios.spread((...responses) => {
            const hamilton = responses[0].data.MRData.StandingsTable.StandingsLists.slice(-6)
            const max_verstappen = responses[1].data.MRData.StandingsTable.StandingsLists.slice(-6)
            let resultwip = []
            for (let i = 0; i < 6; i++) {
                resultwip.push(
                    {
                        name: hamilton[i].season,
                        Hamilton: hamilton[i].DriverStandings[0].points,
                        Verstappen: max_verstappen[i].DriverStandings[0].points
                    }
                )
            }
            this.setState({ results: resultwip });
        })).catch(errors => {
            // react on errors.
        })
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={this.state.results}
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