// src/components/AreaChartExample.tsx
import React, { useRef, useEffect } from "react";
import {
  IgrLegendModule,
  IgrCategoryChartModule,
  IgrLegend,
  IgrCategoryChart,
} from "igniteui-react-charts";

// 1) Register the charting modules
[IgrLegendModule, IgrCategoryChartModule].forEach((m) => m.register());

export default function LineChart() {
  // 2) Sample data defined in the same file
  const sampleData = [
    { year: "2010", Groceries: 70, Electronics: 40, Utilities: 52 },
    { year: "2011", Groceries: 60, Electronics: 35, Utilities: 25 },
    { year: "2012", Groceries: 50, Electronics: 45, Utilities: 22 },
    { year: "2013", Groceries: 60, Electronics: 45, Utilities: 35 },
    { year: "2014", Groceries: 99, Electronics: 65, Utilities: 19 },
  ];

  // 3) Refs for legend and chart to wire them up
  const legendRef = useRef<IgrLegend>(null);
  const chartRef = useRef<IgrCategoryChart>(null);

  // 4) Once mounted, assign the legend to the chart
  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.legend = legendRef.current;
    }
  }, []);

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 text-center text-xl font-semibold">
        Spending by Category
      </h2>

      <div className="mb-4 flex justify-center">
        <IgrLegend ref={legendRef} orientation="Horizontal" />
      </div>

      <IgrCategoryChart
        ref={chartRef}
        dataSource={sampleData}
        chartType="Area"
        includedProperties={["year", "Groceries", "Electronics", "Utilities"]}
        yAxisTitle="Dollars"
        isHorizontalZoomEnabled={false}
        isVerticalZoomEnabled={false}
        computedPlotAreaMarginMode="Series"
        width="100%"
        height="200px"
      />
    </div>
  );
}
