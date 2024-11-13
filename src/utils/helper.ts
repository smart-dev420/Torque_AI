export function formatNumber(number: number): string {
    if (number >= 1000000) {
      // Format numbers in millions
      const millions = number / 1000000;
      return `${millions.toFixed(millions >= 10 ? 0 : 1)}M`;
    } else if (number >= 1000) {
      // Format numbers in thousands
      const thousands = number / 1000;
      return `${thousands.toFixed(thousands >= 10 ? 0 : 1)}K`;
    } else {
      // For numbers less than a thousand, just return the number
      return number.toFixed(0);
    }
  }
  