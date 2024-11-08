import { defineStore } from 'pinia'
import { Product, ProductDetail } from '@core/entities/product'
import { UUID } from '@core/types/type'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      items: [] as Array<Product>,
      bestSales: [] as Array<UUID>,
      promotions: [] as Array<Product>,
      current: undefined as ProductDetail | undefined
    }
  },
  getters: {
    getByUuid: (state) => {
      return (uuid: UUID): Product | null => {
        const product = state.items.find((p) => p.uuid === uuid)
        return product || null
      }
    }
  },
  actions: {
    list(items: Array<Product>) {
      this.items = items
    },
    add(product: Product) {
      this.items.push(product)
    },
    listBestSales(bestSales: Array<UUID>) {
      this.bestSales = bestSales
    },
    listPromotions(promotions: Array<Product>) {
      this.promotions = promotions
    },
    setCurrent(product: ProductDetail) {
      this.current = product
    }
  }
})
