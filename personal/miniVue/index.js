class Vue {
  constructor(options) {
    this.init(options);
    new Watcher(this, render);
  }

  init(options) {
    this.initData(options.data);
  }

  initData(data) {
    let vm = this;
    vm._data = data;
    Object.keys(data).forEach((key) => {
      vm[key] = data[key];
      defineReactive(data, key, data[key])
    })
  }
}

function defineReactive(data, key, value) {
  const dep = new Dep();
  Object.defineProperty(data, key, {
    get() {
      // 依赖收集 怎么去更新？
      dep.depend();
      return value;
    },
    set(newVal) {
      // 依赖发出
      value = newVal;
      dep.notify()
    }
  })
}
