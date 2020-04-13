let vm = new Vue({
  data: {
    a: 1
  }
})

setTimeout(() => {
  console.log('正在改变', vm)
  vm._data.a = 1000;
}, 500);
