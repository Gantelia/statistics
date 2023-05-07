export type TableRowData = {
  date: string
  values: number[]
}

export type Store = Stats & {
  isLoading: boolean
  isError: boolean
}

export type Stats = {
  hasData: boolean
  data: CategoryData[]
}

export type CategoryData = {
  id: number
  name: string
  data: Point[]
}

type Point = [number, number]
