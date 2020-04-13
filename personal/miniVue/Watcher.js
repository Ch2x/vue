class Watcher {
  constructor(vm, render) {
      console.log(render)
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
  const el = document.querySelector('#app');
  console.log(el.innerText);
  el.innerText = vm._data.a;
}
