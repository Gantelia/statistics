import type { TableRowData, CategoryData } from '@/types/data'

export function convertData(data: CategoryData[]): TableRowData[] {
  const convertedData: TableRowData[] = []

  data.forEach((categoryData) => {
    categoryData.data.forEach(([timestamp, value]: [number, number], index: number) => {
      const date = new Date(timestamp).toLocaleDateString()

      if (!convertedData[index]) {
        convertedData[index] = { date, values: [] }
      }

      convertedData[index].values[categoryData.id] = value
    })
  })

  return convertedData
}

export default function checkStatus(response: Response) {
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
}
