//your JS code here. If required.
   let t1=Math.random()*3000;
      let t2=Math.random()*3000;
      let t3=Math.random()*3000;
      console.log(t1);
      console.log(t2);
      console.log(t3)

      let promise1=new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 1");
        }, t1);
      })

      let promise2=new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 2");
        }, t2);
      })

      let promise3=new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise 3");
        }, t3);
      })
       
      // console.log(Date.now());
      let start=performance.now();
        Promise.all([promise1,promise2,promise3]).then((res)=>{
          let end=performance.now();
          total=end-start;
          output.innerHTML=`
          <tr>
          <td>Promise 1</td>
          <td>${t1}</td>
        </tr>
        <tr>
          <td>Promise 2</td>
          <td>${t2}</td>
        </tr>
        <tr>
          <td>Promise 3</td>
          <td>${t3}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${total}</td>
        </tr>`
          
      })
      