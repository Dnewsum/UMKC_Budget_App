// src/components/RadialAreaChartExample.tsx
import React, { useRef, useEffect } from "react";
import {
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartRadialModule,
  IgrDataChartRadialCoreModule,
  IgrDataChartInteractivityModule,
  IgrDataChartAnnotationModule,
  IgrLegend,
  IgrDataChart,
  IgrCategoryAngleAxis,
  IgrNumericRadiusAxis,
  IgrRadialAreaSeries,
  IgrDataToolTipLayer,
} from "igniteui-react-charts";

// 1) Register all the modules we need
[
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartRadialModule,
  IgrDataChartRadialCoreModule,
  IgrDataChartInteractivityModule,
  IgrDataChartAnnotationModule,
].forEach((m) => m.register());

export default function RadialChart() {
  // 2) Sample data inline
  const sampleData = [
    { attribute: "Produce", Last_Month: 9, This_Month: 8 },
    { attribute: "Junk Food", Last_Month: 7, This_Month: 9 },
    { attribute: "Drinks", Last_Month: 6, This_Month: 10 },
    { attribute: "Cleaning", Last_Month: 8, This_Month: 9 },
    { attribute: "Misc.", Last_Month: 5, This_Month: 4 },
  ];

  // 3) Create refs for legend and chart
  const legendRef = useRef<IgrLegend>(null);
  const chartRef = useRef<IgrDataChart>(null);

  // 4) Wire up the legend to the chart once both are rendered
  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.legend = legendRef.current;
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">
        Eletronics Breakdown
      </h2>

      <div className="flex justify-center mb-4">
        <IgrLegend ref={legendRef} orientation="Horizontal" />
      </div>

      <IgrDataChart
        ref={chartRef}
        dataSource={sampleData}
        isHorizontalZoomEnabled={false}
        isVerticalZoomEnabled={false}
        width="100%"
        height="400px"
      >
        <IgrCategoryAngleAxis
          name="angleAxis"
          dataSource={sampleData}
          label="attribute"
        />
        <IgrNumericRadiusAxis
          name="radiusAxis"
          innerRadiusExtentScale={0.1}
          interval={2}
          minimumValue={0}
          maximumValue={10}
        />
        <IgrRadialAreaSeries
          name="series1"
          dataSource={sampleData}
          angleAxisName="angleAxis"
          valueAxisName="radiusAxis"
          valueMemberPath="Last_Month"
          title="Last Month"
          markerType="Circle"
          areaFillOpacity={0.5}
          thickness={3}
          showDefaultTooltip={false}
        />
        <IgrRadialAreaSeries
          name="series2"
          dataSource={sampleData}
          angleAxisName="angleAxis"
          valueAxisName="radiusAxis"
          valueMemberPath="This_Month"
          title="This Month"
          markerType="Circle"
          areaFillOpacity={0.5}
          thickness={3}
          showDefaultTooltip={false}
        />
        <IgrDataToolTipLayer name="dataToolTipLayer" />
      </IgrDataChart>
    </div>
  );
}
