import {
    querySelector,
    querySelectorAll,

    parseSelector,
    parseMatcher,
    selectorToMatcher,
    configure
} from './index';


console.log(querySelectorAll(document, 'div p'));// (2) [p, p]

console.log(
    document.querySelectorAll('div.ss p[test]:nth-of-type(2)'),
    querySelectorAll(document.body, 'div.ss [test]:nth-of-type(2)')
); // NodeList [p] [p]

let selectorText = 'div > p:last-of-type::before';
let matcher = parseMatcher(selectorText);
let testNode = querySelector(document.body, selectorText)

console.log(testNode, matcher(testNode));   // <p test="ff"></p> ["before"]




configure({
    pesudoClassValidatorGenerator(name: string) {
        switch (name) {
            case "test1":
                return function (node: Element) {
                    return node.clientWidth > 10
                }
            case "test2":
                return function (node: Element) {
                    return node.clientWidth < 10
                }
        }
    }
})
console.log(querySelectorAll(document, ':test1')) // [html, body, div.ss, p, p]

console.log(querySelectorAll(document, ':test2')) // [head, span.aa, script]