```js
Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 优先判断缓存是否存在
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters 
    const args = toArray(arguments, 1)
    args.unshift(this)
    如果插件有install方法，则执行install方法并传入Vue和剩下参数，否则将插件当做函数直行
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 进行缓存
    installedPlugins.push(plugin)
    return this
  }
```


