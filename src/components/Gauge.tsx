// src/components/RadialGaugeRanges.tsx
import React from 'react';
import {
  IgrRadialGauge,
  IgrRadialGaugeRange,
  IgrRadialGaugeModule
} from 'igniteui-react-gauges';


IgrRadialGaugeModule.register();

export default function Gauge() {
  return (
    <IgrRadialGauge
      height="300px"
      width="300px"
      minimumValue={0}
      maximumValue={100}
      value={50}
    />
  );
}