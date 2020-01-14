function work() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 0);
  }
  
  console.log('작업 시작!');
  work();
  console.log('다음 작업');


  // Promise 만들기
  const myPromise = new Promise((resolve, reject) => {
    // 구현..
  })

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  
  myPromise.then(n => {
    console.log(n);
  });