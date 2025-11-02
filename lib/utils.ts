import { twMerge } from "tailwind-merge"

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: boolean | undefined }
  | ClassValue[]

export function clsx(...args: ClassValue[]): string {
  const classes: string[] = []

  const walk = (value: ClassValue) => {
    if (!value) return
    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value))
      return
    }
    if (Array.isArray(value)) {
      value.forEach(walk)
      return
    }
    if (typeof value === "object") {
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key) && (value as Record<string, boolean | undefined>)[key]) {
          classes.push(key)
        }
      }
      return
    }
  }

  args.forEach(walk)
  return classes.join(" ")
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}