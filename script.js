let t1 = 1 + Math.random() * 2;
let t2 = 1 + Math.random() * 2;
let t3 = 1 + Math.random() * 2;

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

Promise.all([promise1, promise2, promise3]).then(() => {
  const total = Math.max(t1, t2, t3);
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
    </tr>
  `;
});
