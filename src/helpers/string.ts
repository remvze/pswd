export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

export function capitalizeString(str: string) {
  return str.substring(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
