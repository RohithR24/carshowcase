/**
 * Function to get the current year from today's date.
 * @returns The current year as a number.
 */
export function getCurrentYear(): number {
    const today = new Date();
    return today.getFullYear();
  }