// 0-promise.js

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can resolve or reject the promise here
    resolve('Success');
  });
}
