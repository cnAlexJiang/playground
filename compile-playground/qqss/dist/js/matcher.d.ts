import { parseSelector, ISelectorContext } from './parser';
declare type Element = any;
export { selectorToMatcher, parseSelector, parseMatcher, configure };
export default parseMatcher;
declare type IValidator = (pesudoClassName: string) => (el: Element) => Element | boolean;
declare type IConfigure = {
    pesudoClassValidatorGenerator?: IValidator;
};
declare function configure(option: IConfigure): void;
declare function parseMatcher(selectorText: string): (el: any) => any;
declare function selectorToMatcher({ elementSelector, pseudoElementSelector }: ISelectorContext): (el: Element) => false | Element | Array<string>;
