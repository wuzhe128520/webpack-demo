import './less/less.less';
import _ from 'lodash';
import Icon from './images/icon.png';
import printMe from './print.js';
import { cube } from './math.js';
import '../components/my-component/component.js';
import $ from 'jquery';

$('body').append('<h2>我在index里面使用jquery1.3.2哦！</h2>');
if(process.env.NODE_ENV !== 'production'){
    console.log('正在开发环境中……');
}
function getComponent() {
    // 将图像添加到我们现有的 div。
    var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
   /* var element = document.createElement('pre');
    element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' +cube(5)].join('\n\n');
    return element;
/*   return import(/!* webpackChunkName: "lodash" *!/ 'lodash').then(_ => {
       var element = document.createElement('div');
       element.innerHTML = _.join(['hello', 'webpack分离代码'], ' ');
       return element;
   }).catch(error => '加载组件出错');*/
}
let element = null;
/*getComponent().then(component => {
    document.body.appendChild(component);
});*/
getComponent();
if(module.hot){
    module.hot.accept('./print.js', function(){
            console.log('Accepting the update printMe module');
            document.body.removeChild(element);
            element = getComponent(); //重新渲染页面后，component更新click事件处理
            document.body.appendChild(element);
    })

}
