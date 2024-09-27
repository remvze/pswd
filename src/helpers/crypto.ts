export function getSecureRandomInt(max: number) {
  if (max <= 0) throw new Error('Max must be positive');

  const randomBuffer = new Uint32Array(1);
  const maxUint32 = 0xffffffff;
  const limit = maxUint32 - (maxUint32 % max);

  let randomNumber;

  do {
    window.crypto.getRandomValues(randomBuffer);
    randomNumber = randomBuffer[0];
  } while (randomNumber >= limit);

  return randomNumber % max;
}
