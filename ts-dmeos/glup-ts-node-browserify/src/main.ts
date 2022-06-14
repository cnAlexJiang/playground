import { sayHello } from "./greet";
// import './descriptor'
import './mixin'

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "test");