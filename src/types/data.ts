export type Store = {
  hasData: boolean
  data: CategoryData[]
}

type CategoryData = {
  id: number
  name: string
  data: ChartPoint[]
}

type ChartPoint = number[]
