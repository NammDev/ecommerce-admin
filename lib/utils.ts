import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// calculate the class names

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
  ],
  [{ name: 'Bob', age: 40 }],
]

// map through an array of objects
const names = data.map((item) => item.map((i) => i.name))
