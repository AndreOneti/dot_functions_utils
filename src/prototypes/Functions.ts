'use strict'

export function twoDigits(digit: string | number): string {
  if (0 <= digit && digit < 10) return "0" + digit.toString();
  return digit.toString();
}

export function threeDigits(digit: string | number) {
  if (0 <= digit && digit < 10) return "00" + digit.toString();
  else if (10 <= digit && digit < 100) return "0" + digit.toString();
  else return digit.toString();
}
