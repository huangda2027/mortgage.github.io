var routers = [  //配置路由路径
    { path: '/index', component: '<p>我是首页</p>' },
    { path: '/list', component: '<p>我是列表页</p>' }
];
window.location.hash = '/';  //初始化路由
btn[0].onclick = function () {
    window.location.hash = '/index';  //点击设置路由跳转indexURL
}
btn[1].onclick = function () {
    window.location.hash = '/list';  //点击设置路由跳转listURL
}

window.addEventListener('hashchange', function () {  //添加hashchange事件，即hash改变会触发回调函数
    var hash = window.location.hash;
    for (var i = 0; i < routers.length; i++) {
        if (('#' + routers[i].path) == hash) { //通过循环比对hash值来显示不同的内容
            router.innerHTML = routers[i].component;
        }
    }
})