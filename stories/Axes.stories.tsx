import React from 'react';
import { scaleLinear } from 'd3';

import XAxis from 'src/x-axis/XAxis';

export default {
  title: 'Axes'
};

export const AxesStory = () => {
  const ys = [0, 25, 30, 45, 60, 20, 65, 75];
  const xDomain = [0, ys.length - 1];
  const xRange = [0, 300];
  const xScale = scaleLinear().domain(xDomain).range(xRange);

  return <XAxis scale={xScale} />
};

AxesStory.story = {
  name: 'Chart with axes',
};
