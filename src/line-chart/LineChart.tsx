import React, { useEffect } from 'react';
import { line, curveCardinal } from 'd3';
import { useSpring, animated } from 'react-spring';


const MAX_CHANGE_COEFFICIENT = 3;

const ys = [0, 25, 30, 45, 60, 20, 65, 75];
const getCoords = (ys: number[]): [number, number][] => ys.map((y, index) => [(index + 1) * 50, chartHeight - y]);
const getCoefficient = () => Math.random() * 3;
const chartHeight = ys.reduce((max, y): number => {
  const maxY = y * MAX_CHANGE_COEFFICIENT;
  return maxY > max ? maxY : max;
}, 0);

const LineChart = () => {
  const lineGenerator = line()
    .curve(curveCardinal);
  const initialCoords = getCoords(ys);

  const [animatedCoords, setAnimatedCoords] = useSpring(() => ({ coords: lineGenerator(initialCoords) as string }));

  useEffect(() => {
    const createNewYs = () => ys.map((y) => y * getCoefficient() );

    setInterval(() => {
      const newYs = createNewYs();
      const newCoords = getCoords(newYs);
      setAnimatedCoords({ coords: lineGenerator(newCoords) as string });
    }, 1000);
  }, []);

  return (
    <svg style={{ height: chartHeight, overflow: 'visible' }}>
      <animated.path
        d={animatedCoords.coords}
        style={{ fill: 'none', stroke: 'black' }}
      />
    </svg>
  );
};


export default LineChart;
