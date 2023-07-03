import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function TimeTable(props)  {
    // const dataURL = '';

    const [timeData, setTimeData] = useState([]);
    const [firstHour, setFirstHour] = useState("");
    const [secondHour, setSecondHour] = useState("");
    
    const data = [];

    useEffect(() => {
        const data_dict = props.timeHistory;
        
        // Create a list of objects from the dictionary
        var first = 0;
        var second = -1;
        for (let i = 0; i <= 23; i++) {
            const name = i.toString().padStart(2, "0");
            const frequency = data_dict[name] || 0;
            const obj = {
                name: name,
                Frequency: frequency,
                amt: 2400
            };
            data.push(obj);
            
            if (frequency > first) {
              first = name;
            }
            else if (frequency > second) {
              second = name;
            }
              
        } 
        setFirstHour(first);
        setSecondHour(second);
        setTimeData(data);
    }, [props]);


    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={timeData}
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
            <Line type="monotone" dataKey="Frequency" stroke="#A50034" activeDot={{ r: 8 }} />

          </LineChart>
        </ResponsiveContainer>
        <p>{props.name}님께서는 주로 {firstHour}시와 {secondHour}시에 영상을 자주 시청하십니다.</p>
      </div>
    );
};

// export default TimeTable;
