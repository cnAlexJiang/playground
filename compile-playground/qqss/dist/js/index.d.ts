declare type Element = any;
import { selectorToMatcher, parseSelector, parseMatcher, configure } from './matcher';
export { querySelector, querySelectorAll, parseSelector, parseMatcher, selectorToMatcher, configure };
declare function querySelector(el: Element | Document, selectorText: string): any;
declare function querySelectorAll(el: Element | Document, selectorText: string): any[];
