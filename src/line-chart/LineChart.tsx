import React, { useEffect } from 'react';
import { line, curveCardinal } from 'd3';
import { useSpring, animated } from 'react-spring';


const ys = [25, 30, 45, 60, 20, 65, 75];
const getCoords = (ys: number[]): [number, number][] => ys.map((y, index) => [(index + 1) * 50, y]);
const getCoefficient = () => Math.random() * 3;

const LineChart = () => {
  const lineGenerator = line()
    .curve(curveCardinal);
  const initialCoords = getCoords(ys);

  // const myLine = lineGenerator(coords) as string;

  const [animatedCoords, setAnimatedCoords] = useSpring(() => ({ coords: lineGenerator(initialCoords) as string }));

  useEffect(() => {
    const createNewYs = () => ys.map((y) => y * getCoefficient() );

    setInterval(() => {
      const newYs = createNewYs();
      const newCoords = getCoords(newYs);
      setAnimatedCoords({ coords: lineGenerator(newCoords) as string });
    }, 1000);
  }, []);

  // console.log('animatedCoords', animatedCoords)
  // const interpolated = animatedCoords.ys.interpolate((...coords) => coords);
  // console.log('interpolated', interpolated);




  return (
    <svg>
      <animated.path
        d={animatedCoords.coords}
        style={{ fill: 'none', stroke: 'black' }}
      />
    </svg>
  );
};


export default LineChart;
