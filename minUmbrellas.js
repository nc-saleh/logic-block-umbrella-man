const minUmbrellas = (weatherArr) => {
  const brollyWeather = ["rainy", "thunderstorms"]
  let brollyCount = 0

  for (let i = 0; i < weatherArr.length; i++) {
    const currentReport = weatherArr[i]
    const previousDayReport = weatherArr[i - 1]

    if (
      brollyWeather.includes(currentReport) &&
      !brollyWeather.includes(previousDayReport)
    ) {
      brollyCount++
    }
  }
  return brollyCount
}

module.exports = minUmbrellas
