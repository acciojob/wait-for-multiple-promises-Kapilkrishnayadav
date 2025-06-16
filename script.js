let t1 = Math.random() * 3; // in seconds
let t2 = Math.random() * 3;
let t3 = Math.random() * 3;

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, t1 * 1000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, t2 * 1000);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, t3 * 1000);
});

let start = performance.now();
Promise.all([promise1, promise2, promise3]).then((res) => {
  let end = performance.now();
  let total = (end - start) / 1000; // convert ms to seconds

  const output = document.getElementById("output");
  output.innerHTML = `
    <tr>
      <td>Promise 1</td>
      <td>${t1.toFixed(3)}</td>
    </tr>
    <tr>
      <td>Promise 2</td>
      <td>${t2.toFixed(3)}</td>
    </tr>
    <tr>
      <td>Promise 3</td>
      <td>${t3.toFixed(3)}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${total.toFixed(3)}</td>
    </tr>`;
});
