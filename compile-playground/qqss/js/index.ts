


type Element = any;
type Docuemnt = any;
import {
    selectorToMatcher,
    parseSelector,
    parseMatcher,
    configure
} from './matcher'

const MATCHER_MAP = new Map();

export {
    querySelector,
    querySelectorAll,

    parseSelector,
    parseMatcher,
    selectorToMatcher,
    configure
}


function querySelector(el: Element | Document, selectorText: string) {
    return select(el, selectorText) as Element || null;
}

function querySelectorAll(el: Element | Document, selectorText: string) {
    return select(el, selectorText, []) as Array<Element>;
}

function select(context: Element | Document, selectorText: string, nodeList?: Array<Element>) {
    let node = context.firstElementChild;
    let next = node;
    if (!node) {
        return nodeList;
    }
    let matcher = getMatcher(selectorText);

    do {
        if (matcher(node)) {
            if (nodeList) {
                nodeList.push(node);
            } else {
                return node;
            }
        }
        if ((next = node.firstElementChild || node.nextElementSibling)) {
            continue;
        }
        while (
            (node = node.parentElement)
            && node !== context
            && !(next = node.nextElementSibling)
        );
    } while ((node = next))

    return nodeList;
}
function getMatcher(selectorText: string) {
    let analyzer = MATCHER_MAP.get(selectorText);

    if (MATCHER_MAP.size > 100) {
        MATCHER_MAP.clear();
    }
    if (!analyzer) {
        MATCHER_MAP.set(selectorText, analyzer = parseMatcher(selectorText));
    }
    return analyzer;

}
