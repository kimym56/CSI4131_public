// Data.js
import './Data.css';
// import './TimeTable';
import TimeTable from './TimeTable';
import PieTable from './PieTable';
import BandwidthTable from './BandwidthTable';
import WatchedTable from './WatchedTable';
import AgeTagTable from './AgeTagTable';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../header/Header';
import { useMemo } from 'react';
import { PieChart } from 'recharts';

export default function Data() {
    const dataURL = '';
    // const dataURL = 'http://127.0.0.1:8000/api/data/1'
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const [timeHistory, setTimeHistory] = useState("");
    
    const [tagHistory, setTagHistory] = useState("");
    const [ageTagHistory, setAgeTagHistory] = useState([]);

    const [watchedHistory, setWatchedHistory] = useState([]);
    const [pastWatchedHistory, setPastWatchedHistory] = useState([]);

    const [bandwidthHistory, setBandwidthHistory] = useState("");
    

    useEffect(() => {
        axios.get(dataURL).
        then(function(response){

            setAge(response.data.age);
            setName(response.data.name);

            setTimeHistory(response.data.time_history);

            setTagHistory(response.data.tag);
            setAgeTagHistory(response.data.same_age_tag);

            setWatchedHistory(response.data.history);
            setPastWatchedHistory(response.data.far_past_history);      

            setBandwidthHistory(response.data.bandwidth); 
            
            console.log(response.data.same_age_tag);
        })
    }, []);

    return (
        <div className='container'>
            <Header />
            {/* Contents of the Data page */}
            {/* <h1>Data Visualization</h1> */}

            <div className='content'>
                <div className='profile-container'>
                    <div className='profile'>
                    <table>

                        <tbody>
                            <tr>
                                <td>이름:</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>나이:</td>
                                <td>{age}</td>
                            </tr>
                            {/* {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.column1}</td>
                                <td>{item.column2}</td>
                                {/* Add more columns based on your data structure */}
                            {/* </tr> */}
                            {/* ))} */}
                        </tbody>
                    </table>
                    </div>
                    <div className='watchedTable'>
                        <h2>시청기록</h2>
                        <WatchedTable name={name} watchedHistory={watchedHistory}></WatchedTable>
                    </div>
                    <div className='watchedTable'>
                        <h2>오랜만에 예전에 보셨던 이 영상은 어떠세요?</h2>
                        <WatchedTable name={name} watchedHistory={pastWatchedHistory}></WatchedTable>

                    </div>
                </div>
                {/* Add other components and content here */}
                <div className='dashboard-container'>
                    <div className='dashboard-content'>
                        
                        <div className='table'>
                            <h2>선호 영상 분포도</h2>
                            <PieTable name={name} tagHistory={tagHistory} ageTag={false}></PieTable>
                        </div>
                        <div className='table'>
                            <h2>동일한 연령대의 다른 사용자들의 선호 영상 분포도</h2>
                            <PieTable name={name} tagHistory={ageTagHistory} ageTag={true}></PieTable>
                        </div>
                    </div>
                    <div className='dashboard-content'>
                        <div className='table'>
                            <h2>시청 시간 그래프</h2>
                            <TimeTable name={name} timeHistory={timeHistory}></TimeTable>
                        </div>
                        <div className='table'>
                            <h2>시청 품질 그래프</h2>
                            <BandwidthTable name={name} bandwidthHistory={bandwidthHistory}></BandwidthTable>
                        </div>
                        
                    </div>
                </div>
                {/* <div className='dashboard-container'>
                    <div className='bandwidthTable'>
                        <h2>{name}님의 시청 품질 그래프</h2>
                        <BandwidthTable name={name} bandwidthHistory={bandwidthHistory}></BandwidthTable>
                    </div>

                </div> */}

            </div>
        </div>
    );
};
