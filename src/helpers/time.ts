export function formatSeconds(seconds: number) {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    throw new Error('Input must be a non-negative number.');
  }

  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;

  const prefixes = [
    { factor: 1e63, name: 'vigintillion' },
    { factor: 1e60, name: 'novemdecillion' },
    { factor: 1e57, name: 'octodecillion' },
    { factor: 1e54, name: 'septendecillion' },
    { factor: 1e51, name: 'sexdecillion' },
    { factor: 1e48, name: 'quindecillion' },
    { factor: 1e45, name: 'quattuordecillion' },
    { factor: 1e42, name: 'tredecillion' },
    { factor: 1e39, name: 'duodecillion' },
    { factor: 1e36, name: 'undecillion' },
    { factor: 1e33, name: 'decillion' },
    { factor: 1e30, name: 'nonillion' },
    { factor: 1e27, name: 'octillion' },
    { factor: 1e24, name: 'septillion' },
    { factor: 1e21, name: 'sextillion' },
    { factor: 1e18, name: 'quintillion' },
    { factor: 1e15, name: 'quadrillion' },
    { factor: 1e12, name: 'trillion' },
    { factor: 1e9, name: 'billion' },
    { factor: 1e6, name: 'million' },
    { factor: 1e3, name: 'thousand' },
  ];

  const smallerUnits = [
    { name: 'day', seconds: 24 * 60 * 60 },
    { name: 'hour', seconds: 60 * 60 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ];

  if (seconds >= SECONDS_IN_YEAR) {
    const years = seconds / SECONDS_IN_YEAR;

    for (const prefix of prefixes) {
      if (years >= prefix.factor) {
        const value = Math.round(years / prefix.factor);

        return `${value.toLocaleString()} ${prefix.name} years`;
      }
    }

    const roundedYears = Math.round(years);
    const unitName = roundedYears === 1 ? 'year' : 'years';

    return `${roundedYears} ${unitName}`;
  }

  for (const unit of smallerUnits) {
    if (seconds >= unit.seconds) {
      const value = Math.round(seconds / unit.seconds);
      const unitName = value === 1 ? unit.name : unit.name + 's';

      return `${value} ${unitName}`;
    }
  }

  return '0 seconds';
}
