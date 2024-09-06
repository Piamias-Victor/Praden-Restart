declare global {
    const definePageMeta: typeof import('nuxt').definePageMeta;
}

export type UUID = string

export interface HashTable<T> {
    [key: string]: T
}