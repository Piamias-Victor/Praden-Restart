export const priceFormatter = (
  locale: string,
  currency: string,
  minimumFractionDigits = 2
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits
  })
}

export const percentFormatter = (n: number) => {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(n / 100)
}

export const timestampToLocaleString = (
  timestamp: number,
  locale: string,
  options: any = { year: 'numeric', month: 'short', day: 'numeric' }
) => {
  const date = new Date(timestamp)
  return date.toLocaleString(locale, options)
}

export const truncate = (str: string, lenght: number): string => {
  if (str.length < lenght) return str
  return str.slice(0, lenght) + '...'
}
