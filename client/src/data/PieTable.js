import React, { PureComponent, useEffect, useState, useQuery } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const dataURL = '';
// const dataURL = 'http://127.0.0.1:8000/api/data/1'

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const fill = "#A50034";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={20} fontWeight={700}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Num of Video: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class PieTable extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: this.props.name,
      mostWatched: "",
      activeIndex: 0,
      ageTag: this.props.ageTag,
    }
  }

  componentDidMount() {
    axios.get(dataURL)
      .then(response => {
        // Handle the response data
        var mostWatchedNum = 0;
        var mostWatchedTag = "";
        const tag = this.state.ageTag ? response.data.same_age_tag : response.data.tag;
        const transformedData = [];
        console.log(tag)
        
        for (let i = 0; i < tag.length; i++) {
          transformedData.push({
            name: tag[i][0],
            value: tag[i][1]
          });

          if (tag[i][1] > mostWatchedNum) {
            mostWatchedNum = tag[i][1];
            mostWatchedTag = tag[i][0];
          }
        }
        
        this.setState({ data: transformedData,
                        mostWatched: mostWatchedTag });
        console.log(this.state.mostWatched)
      })
      .catch(error => {
        console.log(error);
      });
  }


  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#6B6B6B"
              dataKey="value"
              nameKey="name"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
        {this.state.ageTag ? <p>{this.props.name}님과 비슷한 연령대의 다른 사용자 분들은 {this.state.mostWatched} 관련된 영상을 많이 보고 있어요! {this.props.name}님도 이런 영상들 보러 가는건 어떠신가요?</p>
        : <p>주로 {this.state.mostWatched} 관련된 영상을 많이 보셨습니다.</p>}
      </div>
    );
  }
}
