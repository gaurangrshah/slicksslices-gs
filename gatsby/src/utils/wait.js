// typically used inside an async function

export function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
// usage:
// await wait(5000);
