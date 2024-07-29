// Export a new WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  if (!(endpoint instanceof Object)) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint exists in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1); // Initialize count to 1
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1); // Increment count
  }
}
