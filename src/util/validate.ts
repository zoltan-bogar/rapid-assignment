export const isValidAlphabetic = (string: string): boolean => {
  return /^[a-zA-Z]+$/.test(string);
}