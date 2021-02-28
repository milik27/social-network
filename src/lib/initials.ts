export const initials = (str: string): string => {
  return str
    .split(/\s+/)
    .map((w, i) => (i < 2 ? w.substring(0, 1).toUpperCase() : ''))
    .join(' ')
}
