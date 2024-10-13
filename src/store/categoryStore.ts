import { Category } from '@core/entities/category'
import { CategoryDoesNotExistsError } from '@core/errors/CategoryDoesNotExistsError'
import { UUID } from '@core/types/type'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('CategoryStore', {
  state: () => {
    return {
      itemsSet: new Set() as Set<Category>,
      best: [] as Array<UUID>
    }
  },
  getters: {
    getByUuid: (state) => {
      return (uuid: UUID): Category => {
        const categories = Array.from(state.itemsSet)
        const category = categories.find((p) => p.uuid === uuid)
        if (!category) throw new CategoryDoesNotExistsError(uuid)
        return category
      }
    },
    items: (state) => {
      return Array.from(state.itemsSet)
    }
  },
  actions: {
    list(categories: Array<Category>) {
      this.itemsSet = new Set(categories)
    },
    listBest(bestCategories: Array<UUID>) {
      this.best = bestCategories
    },
    add(category: Category) {
      this.itemsSet.add(category)
    }
  }
})
