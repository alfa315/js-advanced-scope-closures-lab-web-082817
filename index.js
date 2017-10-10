function produceDrivingRange(distance) {
  return function (start, stop) {
    let diffDistance = Math.abs(parseInt(stop) - parseInt(start));
    return diffDistance > distance ? `${diffDistance - distance} blocks out of range` : `within range by ${distance - diffDistance}`
  }
}

function produceTipCalculator(tipPercent) {
  return function(totalFare) {
    return totalFare * tipPercent
  }
}
