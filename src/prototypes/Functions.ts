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

export function generateUniqueID(): string {
  let d = Date.now();
  try {
    /* istanbul ignore next */
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now();
    }
  } catch (error) { }
  const id = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return id;
}

export function log(message: any, level: "Error" | "Debug" | "OK"): void {
  let data = new Date();
  let hour = data.getHours().toString().twoDigits();
  let minute = data.getMinutes().toString().twoDigits();
  let second = data.getSeconds().toString().twoDigits();
  console.log(`[ ${(new Date()).format('dd/mm/yyyy')} - ${hour}:${minute}:${second} - ${level} ] > `, message);
}

export function waitFor(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
