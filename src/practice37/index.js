/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram(s, t) {
  const sort = str => {
    return str
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join()
  }
  return sort(s) == sort(t)
}
