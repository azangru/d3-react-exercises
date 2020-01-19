// example of building your own axis from d3 ticks: https://observablehq.com/@d3/d3-ticks
import React from 'react';
import { ScaleLinear } from 'd3';

type Props = {
  scale: ScaleLinear<number, number>
};

const XAxis = (props: Props) => {
  const {scale} = props;
  const axisTicks = props.scale.ticks(5)
    .map(tick => (
      <line
        key={tick}
        y2={10}
        transform={`translate(${scale(tick)}, 10)`}
        stroke="black"
      />
    ));

  return (
    <svg style={{ overflow: 'visible' }}>
      { axisTicks }
    </svg>
  );
};

export default XAxis;
