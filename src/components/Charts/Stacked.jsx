import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective,
  SeriesDirective, Inject, Legend, Category,
  StackingColumnSeries, Tooltip
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../context/ContextProvider';

import {
  stackedCustomSeries,
  stackedPrimaryXAxis, stackedPrimaryYAxis,
  stackedSecondaryXAxis, stackedSecondaryYAxis,
  stackedData
} from '../../data/dummy'

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext()
  console.log(currentMode)
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: currentMode === 'Dark' ? '#88888E' : 'white'}}
      background={currentMode === 'Dark' ? '#33373E' : 'white'}
    >
      <Inject services={[Legend, Category,
        StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
