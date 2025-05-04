// src/components/RadialGaugeRanges.tsx
import React, { useRef } from 'react';
import {
  IgrRadialGauge,
  IgrRadialGaugeRange,
  IgrRadialGaugeModule,
} from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

interface RadialGaugeRangesProps {
  //a component to display the current budget in a radial gauge


  currentBudgetValue: number; // The current value of the gauge
  budget: number; // Add a prop for the user's budget
}

export default function RadialGaugeRanges({ currentBudgetValue, budget }: RadialGaugeRangesProps) {
  const gaugeRef = useRef<IgrRadialGauge>(null);

  const minValue = 0; // Minimum value for the gauge
  const maxValue = currentBudgetValue; // You can change this value to adjust the maximum
  const greenStart = minValue - (maxValue * .1);
  const greenEnd = maxValue * 0.5;
  const yellowEnd = maxValue * 0.8;
  const redEnd = maxValue * 1.1;
  const interval = maxValue / 10;

  return (
    <div>
      <IgrRadialGauge
        ref={gaugeRef}
        height="300px"
        width="300px"
        minimumValue={0}
        maximumValue={maxValue}
        value={budget} // Use the budget prop here
        transitionDuration={1500}
        needleBrush="#1f2937"
        needleOutline="#1f2937"
        backingBrush="#f8fafc"
        backingOutline="#e2e8f0"
        tickBrush="#94a3b8"
        fontBrush="#1f2937"
        needlePivotShape="CircleOverlay"
        scaleStartExtent={0.45}
        scaleEndExtent={0.9}
        needleEndExtent={0.7}
        needleStartExtent={0}
        labelInterval={interval}
        interval={interval}
      >
        <IgrRadialGaugeRange
          name="greenRange"
          startValue={greenStart}
          endValue={greenEnd}
          brush="#4ade80" // green-400
          outline="#4ade80"
        />
        <IgrRadialGaugeRange
          name="yellowRange"
          startValue={greenEnd}
          endValue={yellowEnd}
          brush="#facc15" // yellow-400
          outline="#facc15"
        />
        <IgrRadialGaugeRange
          name="redRange"
          startValue={yellowEnd}
          endValue={redEnd}
          brush="#f87171" // red-400
          outline="#f87171"
        />
      </IgrRadialGauge>
    </div>
  );
}