export function palindrome(nb: number): boolean {
  let reverse: number = 0;
  let i: number = 0;
  do {
    reverse = reverse * 10 + getDigit(nb, i);
    ++i;
  } while (nb % 10 ** i !== nb);
  return nb >= 0 && reverse === nb;
}

export function getDigit(nb: number, i: number): number {
  return Math.floor(nb / 10 ** i) % 10;
}
