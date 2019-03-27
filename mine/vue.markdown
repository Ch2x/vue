#new Vue

{
 _uid: 0,
 _isVue: true,

 prototype: {
   _init: fn,
   $data,
   $props,
   $set,
   $delete,
   $watch,
   $on,
   $once,
   $off,
   $emit,
   _update,
   $forceUpdate,
   $destroy,
   $nextTick,
   _render,
 }
}

#mergeOptions(parent, child, vm)

Vue.options = {
components: {
KeepAlive,
Transition,
TransitionGroup
},
directives: Object.create(null),
directives:{
 model,
 show
},
 filters: Object.create(null),
 _base: Vue
}

normalizeProps(child, vm) //正常化props属性
normalizeInject(child, vm) //正常化inject属性
normalizeDirectives(child) //正常化directive属性

如果有child.extends / child.mixins  则mergeOptions

##合并策略

合并选项，用户可以定义合并策略
  el、prop默认策略
  assets   extend(Object.create(parent || null), child)
  data return function()
  hooks  [parent, child] || [child]
  watch 存在同参，合并为数组
  props methods injects computeds child cover parent
  provide mergeDataOrFunction

{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,

}

#initLifecycle
{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null
_inactive :null
  _directInactive : false
  _isMounted : false
  _isDestroyed :false
  _isBeingDestroyed :false
}

#initEvents
{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false
}

#initRender

{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false,

  _vnode: null,
  _staticTrees: null,

  $vnode:'',
  $slots: {},
  $scopedSlots: emptyObject,
  _c: (a, b, c, d) => createElement(vm, a, b, c, d, false),

  $createElement: (a, b, c, d) => createElement(vm, a, b, c, d, true)

}


#beforeCreate

##initInjections

##initState

{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false,

  _vnode: null,
  _staticTrees: null,

  $vnode:'',
  $slots: {},
  $scopedSlots: emptyObject,
  _c: (a, b, c, d) => createElement(vm, a, b, c, d, false),

  $createElement: (a, b, c, d) => createElement(vm, a, b, c, d, true)

  _watchers: [],
}

###initProps

paused

###initMethods

1.是否函数
2.是否与props重名
3.保留名字或者已经存在名字

###initData

###initComputed


###initWatch


###initProvide

#created

#$mount  完成版 template to render 生成render过程

### 取el

优先取template,再取el.outerHTML
生成render 和 staticRenderFns

{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false,

  _vnode: null,
  _staticTrees: null,

  $vnode:'',
  $slots: {},
  $scopedSlots: emptyObject,
  _c: (a, b, c, d) => createElement(vm, a, b, c, d, false),

  $createElement: (a, b, c, d) => createElement(vm, a, b, c, d, true)

  _watchers: [],

  render,
  staticRenderFns,
}


## 执行#mount


{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false,

  _vnode: null,
  _staticTrees: null,

  $vnode:'',
  $slots: {},
  $scopedSlots: emptyObject,
  _c: (a, b, c, d) => createElement(vm, a, b, c, d, false),

  $createElement: (a, b, c, d) => createElement(vm, a, b, c, d, true)

  _watchers: [],

  render,
  staticRenderFns,

  $el: el
}

# beforeMount

赋值updateComponent

## new Watcher

{
 _uid: 0,
 _isVue: true,
 $options； {
   ...
 },
 _renderProxy: vm,
 _self： vm,
 $parent: undefined,
 $root: vm,
 $children: [],
 $refs: {},
 _watcher : null,
_inactive :null,
  _directInactive : false,
  _isMounted : false,
  _isDestroyed :false,
  _isBeingDestroyed :false,

  _events: {},
  _hasHookEvent: false,

  _vnode: null,
  _staticTrees: null,

  $vnode:'',
  $slots: {},
  $scopedSlots: emptyObject,
  _c: (a, b, c, d) => createElement(vm, a, b, c, d, false),

  $createElement: (a, b, c, d) => createElement(vm, a, b, c, d, true)

  _watchers: [this], //观察者对象

  render,
  staticRenderFns,

  $el: el,

  _watcher: this, //观察者对象



}

new watcher {
  deep: false,
  user: false,
  lazy: false,
  sync: false,
  before: false,
  cb: noop,
  id: 0,
  active = true
  dirty = this.lazy // for lazy watchers
  deps = []
  newDeps = []
  depIds = new Set()
  newDepIds = new Set()
  expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
}

# mounted
