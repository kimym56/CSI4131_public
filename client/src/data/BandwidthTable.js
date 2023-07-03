import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function BandwidthTable(props)  {
    const [bandwidthData, setBandwidthData] = useState([]);
    const [avgBandwidth, setAvgBandwidth] = useState(0);
    
    const data = [];

    useEffect(() => {
        var avg = 0;
        var cnt = 0;
        const data_dict = props.bandwidthHistory;

        for (let i = 0; i < data_dict.length; i++) {
          var date = data_dict[i][0].split(":");
          var bandwidth = data_dict[i][1];
          
          date = date[1] + "월 " + date[2] + "일 " + date[3] + "시"
          const obj = {
            date : date,
            Average : bandwidth[0] / bandwidth[1]
          }
          data.push(obj);

          avg += bandwidth[0];
          cnt += bandwidth[1];
        }

        setBandwidthData(data);
        setAvgBandwidth(avg / cnt);
    }, [props]);

    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={bandwidthData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" fontSize={15} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Average" stroke="#A50034" activeDot={{ r: 8 }} />

          </LineChart>
        </ResponsiveContainer>
        <p>{props.name}님께서는 평균 {parseInt(avgBandwidth)}의 품질로 영상을 시청하십니다.</p>
      </div>
    );
};

// export default TimeTable;
