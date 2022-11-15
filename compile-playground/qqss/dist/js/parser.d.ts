declare type IConditions = Record<string, any>[];
declare type ISelector = Array<IConditions | string>;
declare type ISelectorContext = {
    input: string;
    start: number;
    index: number;
    elementSelector: ISelector;
    pseudoElementSelector?: Record<string, ISelector>;
};
export { IConditions, ISelector, ISelectorContext, parseSelector };
export default parseSelector;
declare function parseSelector(selectorText: string, start?: number): ISelectorContext;
