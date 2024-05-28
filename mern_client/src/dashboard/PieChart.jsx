

import React from 'react';
import { PieChart, Pie, Cell,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DashBoardPromo from './DashBoardPromo';
const userData = [
 { name: 'Users Visited', value: 100, color: 'lightblue' },
];
 const data = [
//   { name: 'Label 1', value: 30, color: 'red' },
//   { name: 'Label 2', value: 50, color: 'green' },
//   { name: 'Label 3', value: 20, color: 'blue' },
    { name: 'fiction', value: 30,color: 'red' },
    { name: 'Nonfiction', value: 50,color: 'green' },
    { name: 'History', value: 50,color: 'blue' },
    { name: 'Programming', value: 20, color: 'gray'},
    { name: 'Mistry', value: 20, color: 'yellow' },
    { name: 'Science-Fiction', value: 20, color: 'violet' },
    { name: 'Fantacy', value: 20, color: 'sky' },
    { name: 'Horror', value: 20, color: 'orange'},
    { name: 'BiblioGraphy', value: 20, color: 'indigo'},
    { name: 'AutoBiography', value: 20, color: 'salmon'},
    { name: 'SelfHelp', value: 20, color: 'lightcarol'},
    { name: 'Memoir', value: 20, color: '#2E4053 '},
    { name: 'Buissness', value: 20, color: '#DAF7A6'},
    { name: 'Travel', value: 20, color: '#DAF7A6'},
    { name: 'Religion', value: 20, color: '#520303'},
];
const cdata = [
 { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
 { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
 { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
 { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
 { name: 'May', uv: 189, pv: 7800, amt: 2181 },
 { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
 { name: 'Jul', uv: 349, pv: 1200, amt: 2100 },
 { name: 'Aug', uv: 349, pv: 8700, amt: 2100 },
 { name: 'Sept',uv: 349, pv: 4300, amt: 2100 },
 { name: 'Oct', uv: 349, pv: 6300, amt: 2100 },
 { name: 'Nov', uv: 349, pv: 9300, amt: 2100 },
 { name: 'Dec', uv: 349, pv: 4300, amt: 2100 },
];
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    const { name, value, color } = payload[0].payload;
    return (
      <div style={{ background: 'white', padding: '5px', border: '1px solid', borderRadius: '5px' }}>
        {`${name}: ${value}`} <br />
        <span style={{ color: color }}>█</span> {color}
      </div>

    );
  }
  return null;
};

const PieChartExample = () => {
  return (
    
    <div className = 'font-bold text-gray-800 shadow-md' style = {{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
     <div>
     <h2>Total no of Books issued till Now category wise</h2>
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
      </div>
      <div className='mb-24' >
        <h2 className='mx-44'>Users Visited Every Month</h2>
        <LineChart  width={450} height={300} data={cdata} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      
    </LineChart>
    
      </div>
     
    </div>
    
  );
};

export default PieChartExample;
