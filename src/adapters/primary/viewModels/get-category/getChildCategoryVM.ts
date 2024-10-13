import { UUID } from '@core/types/types'
import { useCategoryStore } from '@store/categoryStore'
import { Category } from '@core/entities/category'

export interface ChildCategoryItemVM {
  uuid: UUID
  name: string
  href: string
  img: string
  icon: string
}

export interface ChildCategoriesVM {
  items: Array<ChildCategoryItemVM>
}

export const getChildCategoriesVM = (uuid: UUID): ChildCategoriesVM => {
  const categoryStore = useCategoryStore()
  const categories = categoryStore.items
  const childCategories = categories.filter((c) => c.parentUuid === uuid)
  return {
    items: childCategories.map((category: Category) => {
      return {
        uuid: category.uuid,
        name: category.name,
        href: `/categories/${category.uuid}`,
        img: getImageInMemory(category.uuid),
        icon: getIconInMemory(category.uuid)
      }
    })
  }
}

export const getImageInMemory = (uuid: UUID): string => {
  return ''
}

export const getIconInMemory = (uuid: UUID): string => {
  if (uuid === '19730921-246e-4eec-9a3b-17b49e416c82')
    return '/_nuxt/assets/bebe.svg'
  if (uuid === '0f4946ae-2e5f-46e8-86a7-fb6d3ae8d75f')
    return '/_nuxt/assets/dog.svg'
  if (uuid === '0681dc96-411b-4ed5-b457-5c09e7163373')
    return '/_nuxt/assets/pills.svg'
  if (uuid === '9869193d-f291-4a74-9d29-b09429b7f81d')
    return '/_nuxt/assets/nature.svg'
  if (uuid === 'ed552c28-e8d8-444c-955f-d9ea7803f8fd')
    return '/_nuxt/assets/ortho.svg'
  if (uuid === '7480b66f-d589-42de-a122-3cff0590dd40')
    return '/_nuxt/assets/dermoBlack.svg'
  if (uuid === 'e226d36e-1c9e-44e1-8cb0-a70847d35ed7')
    return '/_nuxt/assets/sante.svg'
  if (uuid === 'aadb1ea0-3961-46c8-8005-172779c74756')
    return '/_nuxt/assets/care.svg'
  if (uuid === '03c3ddc9-7616-48df-9bf7-3290da61b23b')
    return '/_nuxt/assets/promo.svg'
  return '/_nuxt/assets/category.svg'
}
