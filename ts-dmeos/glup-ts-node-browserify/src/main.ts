import { sayHello } from "./other/greet";
// import './descriptor'
import './decorator/mixin'
import './decorator/ts-decorator-base'
import './decorator/ts-decorator-advanced'
import './decorator/ts-decorator-class'

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "test");


