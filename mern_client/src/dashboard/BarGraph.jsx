import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
  const data = [
    { name: 'Fiction', value: 30 },
    { name: 'Non-Fiction', value: 25 },
    { name: 'Science Fiction', value: 20 },
    { name: 'Mystery & Thriller', value: 15 },
    { name: 'Biography', value: 10 },
    { name: 'Romance', value: 5 },
  ];

  const colors = ['#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#4331DE', '#047B08'];

  return (
    <div className='shadow-2xl mt-8 p-8 bg-white rounded-lg'>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-56">Book Category Distribution</h2>
      <BarChart width={850} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {colors.map((color, index) => (
          <Bar key={index} dataKey="value" fill={color} />
        ))}
      </BarChart>
      <p className="text-sm text-gray-600 mt-4 ml-64 font-bold">Explore the distribution of books across different categories.</p>
    </div>
  );
};

export default BarGraph;
