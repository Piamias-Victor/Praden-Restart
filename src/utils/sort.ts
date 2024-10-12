export enum SortType {
  None,
  Asc,
  Desc
}

export const sortByName = (a: any, b: any) => {
  return a.name < b.name ? -1 : 1
}

export const sortByPrice =
  (sortType: SortType) =>
  (a: any, b: any): number => {
    if (sortType === SortType.None) return 1
    if (sortType === SortType.Asc) return a.price < b.price ? -1 : 1
    return a.price > b.price ? -1 : 1
  }
