// example of building your own axis from d3 ticks: https://observablehq.com/@d3/d3-ticks
import React from 'react';
import { ScaleLinear } from 'd3';

type Props = {
  scale: ScaleLinear<number, number>
  width: number
};

const XAxis = (props: Props) => {
  const {scale} = props;
  const axisTicks = props.scale.ticks(20)
    .map(tick => (
      <g key={tick} transform={`translate(${scale(tick)}, 0)`}>
        <line
          y1={0}
          y2={7}
          stroke="black"
        />
        <text style={{ fontSize: '12px' }} textAnchor="middle" x="0" y="18">{tick}</text>
      </g>
    ));

  return (
    <svg width={300} height={20} style={{ overflow: 'visible'}}>
      <line x1={0} x2={scale(scale.ticks().pop())} y1={0} y2={1} stroke="black"/>
      { axisTicks }
    </svg>
  );
};

export default XAxis;
