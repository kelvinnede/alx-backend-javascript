import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };
console.log(weakMap.get(endpoint)); // Should be undefined initially

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Should be 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // Should be 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

try {
  queryAPI(endpoint); // Should throw an error
} catch (error) {
  console.error(error.message); // Endpoint load is high
}
