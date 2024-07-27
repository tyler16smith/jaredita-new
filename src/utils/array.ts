// Guarantee that an array contains at least one value, proving the type. Useful for zod enum types.
export function atLeastOne<T>(values: T[]): [T, ...T[]] {
  if (values.length === 0)
    throw new Error('At least one value required in array')

  const first = values[0]
  if (first == null) throw new Error('First value in array cannot be null')

  return [first, ...values.slice(1)]
}