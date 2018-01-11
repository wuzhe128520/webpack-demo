import './style.css';
import './font-awesome.min.css';
import Icon from './icon.png';
import Icons from './jounary.jpg';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    // 将图像添加到我们现有的 div。
  /*  var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;*/
    var element = document.createElement('pre');
    element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' +cube(5)].join('\n\n');
    return element;
}
let element = component();
document.body.appendChild(element);
if(module.hot){
    module.hot.accept('./print.js', function(){

            console.log('Accepting the update printMe module');
            document.body.removeChild(element);
            element = component(); //重新渲染页面后，component更新click事件处理
            document.body.appendChild(element);
    })

}
