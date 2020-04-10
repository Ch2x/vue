(function(){
    class Vue {
        constructor(options) {
            this.init(options);
        }

        init(options) {
            initData(options.data);
        }

        initData(data) {
            observe(data)
        }

        observe(data) {
            for(let i in data) {
                if(data.hasOwnProperty(i)) {
                    Object.defineProperty(data,i, {
                        get() {
                            // 依赖收集 怎么去更新？
                            
                        },
                        set(val) {
                            // 依赖发出
                            console.log(val);
                        }
                    })
                }
            }
        }
    }



    
})()