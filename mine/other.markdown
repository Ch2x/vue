// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
targetStack


template => render (complier)
vm._render() 调用 render => vnodes
render.call(vm._renderProxy, vm.$createElement)

vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */) 对应$el被重写
