export function filterNumbers(value: string) {
  return value.replace(/[^0-9]/g, "");
}

export function filterNumbersAndConvertToString(value: string) {
  const num = value.replace(/[^0-9]/g, "");

  return parseFloat(num);
}

export function parseInFloat(value: string) {
  const num = value.replace(",", ".");

  return parseFloat(num);
}
