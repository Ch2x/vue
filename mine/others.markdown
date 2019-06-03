import命令具有提升效果，会提升到整个模块的头部，首先执行


hasOwnProperty 只会遍历当前对象 忽略原型链上的

Object.keys(..) 会返回一个数组，包含所有可枚举属性，
Object.getOwnPropertyNames(..)会返回一个数组，包含所有属性，无论它们是否可枚举

Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 新创建的对象的原型的对象

instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置

Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。


isPrototypeOf(object) 方法用于测试一个对象是否存在于另一个对象的原型链上 object在该对象的原型链上搜寻

new 

当代码 new Foo(...) 执行时，会发生以下事情：

一个继承自 Foo.prototype 的新对象被创建。
使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
由构造函数返回的对象就是 new表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）