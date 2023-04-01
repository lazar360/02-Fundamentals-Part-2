"use strict";
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees Celsius :"),
  };
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
