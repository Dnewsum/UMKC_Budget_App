// src/components/CategoryChart.tsx
import React from "react";
import { Card } from "flowbite-react";
import {
  IgrDataChartCoreModule,
  IgrDataChartCategoryModule,
  IgrCategoryChart,
  IgrCategoryXAxis,
  IgrNumericYAxis,
  IgrColumnSeries,
} from "igniteui-react-charts";

// Register IgniteUI modules once
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();

// Utility class for generating chart data
class CategoryChartSharedData {
  static generateItems(
    startValue: number,
    maxPoints: number,
    useShortLabels = false
  ): { Label: string; Value: number }[] {
    const data: { Label: string; Value: number }[] = [];
    let value = startValue;

    for (let i = 0; i <= maxPoints; i++) {
      value += Math.random() * 4 - 2; // slight random walk
      const label = useShortLabels
        ? this.toShortString(i)
        : i.toString();
      data.push({ Label: label, Value: Math.round(value) });
    }

    return data;
  }

  static toShortString(n: number): string {
    if (n >= 1_000_000) return `${Math.round(n / 100_000) / 10}m`;
    if (n >= 1_000) return `${Math.round(n / 100) / 10}k`;
    return n.toString();
  }
}

export interface CategoryChartProps {
  startValue: number;
  maxPoints: number;
  useShortLabels?: boolean;
}

const CategoryChart: React.FC<CategoryChartProps> = ({
  startValue,
  maxPoints,
  useShortLabels = false,
}) => {
  const data = React.useMemo(
    () =>
      CategoryChartSharedData.generateItems(
        startValue,
        maxPoints,
        useShortLabels
      ),
    [startValue, maxPoints, useShortLabels]
  );

  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <IgrCategoryChart dataSource={data} width="100%" height="400px">
        <IgrCategoryXAxis name="xAxis" label="Label" />
        <IgrNumericYAxis name="yAxis" />
        <IgrColumnSeries
          name="series"
          xAxisName="xAxis"
          yAxisName="yAxis"
          valueMemberPath="Value"
        />
      </IgrCategoryChart>
    </Card>
  );
};

export default CategoryChart;
