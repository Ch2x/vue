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

let uid = 0;
class Dep {
  constructor() {
    this.subs = [];
    this.id = uid++;
  }

  depend() {
    Dep.target.addDep(this)
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].update();
    }
  }
}
Dep.target = null

class Watcher {
  constructor(vm, render) {
    Dep.target = this;
    this.vm = vm;
    this.render = render;
    this.depIds = new Set();
    render(vm);
  }

  addDep(dep) {
    if (!this.depIds.has(dep.id)) {
      this.depIds.add(dep.id)
      dep.addSub(this)
    }
  }

  update() {
    // 更新
    render(this.vm);
  }
}

function render(vm) {
  console.log(vm)
  const el = document.querySelector('#app');
  el.innerText = vm._data.a;
}
