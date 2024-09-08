export function toProperCase(str: string) {
  return str.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase())
}