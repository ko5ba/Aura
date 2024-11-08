const PRESSURE_UNITS = 0.750062

export const capitalizeFirstLatter = (string) => {
  if (!string) return ''

  return string.charAt(0).toUpperCase() + string.slice(1, )
}

export const getPressureMm = (value) => {
  return Math.round(value * PRESSURE_UNITS)
}

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
