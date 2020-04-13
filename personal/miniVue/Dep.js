let uid = 0;
class Dep {
  constructor() {
    this.subs = [];
    this.id = uid++;
  }

  depend() {
    Dep.target.addDep(this);
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
Dep.target = null;
