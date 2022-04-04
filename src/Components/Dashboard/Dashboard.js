import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 300000,
            "sell": 345,
            "revenue": 20441
        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 400000,
            "sell": 523,
            "revenue": 34500
        },
        {
            "id": 3,
            "month": "May",
            "investment": 600000,
            "sell": 856,
            "revenue": 76542
        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 800000,
            "sell": 620,
            "revenue": 53554
        },
        {
            "id": 5,
            "month": "Jul",
            "investment": 600000,
            "sell": 756,
            "revenue": 62155
        },
        {
            "id": 6,
            "month": "Aug",
            "investment": 800000,
            "sell": 756,
            "revenue": 72000
        }
    ]
    return (
        <div className='mt-5'>
            <h1 className='text-success text-center'>Summery</h1>
            <div className='mt-5 row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-3">
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
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;