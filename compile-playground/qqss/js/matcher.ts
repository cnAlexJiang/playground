

import { parseSelector, IConditions, ISelector, ISelectorContext } from './parser'

type Element = any;
type Docuemnt = any;

export {
    selectorToMatcher,
    parseSelector,
    parseMatcher,
    configure
}
export default parseMatcher;


type IValidator = (pesudoClassName: string) => (el: Element) => Element | boolean;
type IConfigure = {
    pesudoClassValidatorGenerator?: IValidator
}
let pesudoClassValidatorGenerator: IValidator;
function configure(option: IConfigure) {

    let value = option.pesudoClassValidatorGenerator;
    if (value !== undefined) {
        pesudoClassValidatorGenerator = value;
    }
}


function parseMatcher(selectorText: string) {
    return selectorToMatcher(parseSelector(selectorText));
}
function selectorToMatcher(
    { elementSelector, pseudoElementSelector }: ISelectorContext
): (el: Element) => false | Element | Array<string> {

    let elementValidator = elementSelector.length
        && getValidator(elementSelector);

    if (pseudoElementSelector) {

        let pseudoPatterns = Object.keys(pseudoElementSelector).map(
            function (key: string) {
                return [
                    key,
                    getValidator(pseudoElementSelector[key])
                ];
            }
        );
        return function (el: Element) {
            let result = elementValidator && elementValidator(el) ? [""] : [];
            for (let [key, pseudoValidator] of pseudoPatterns) {
                pseudoValidator(el) && result.push(key);
            }
            return result.length ? result : false;
        }
    }

    return elementValidator || function () { return false };
}






function getValidator(factors: ISelector, index: number = 0) {

    let validator = getConditionsValidator(factors[index] as IConditions);

    while (index < factors.length - 1) {

        let combinator: string = factors[index + 1] as string;

        if (combinator !== ",") {
            index += 2;
            validator = getCombinationValidator(
                validator,
                combinator,
                getConditionsValidator(factors[index] as IConditions)
            )
        } else {
            return getCombinationValidator(
                validator,
                combinator,
                getValidator(factors, index + 2)
            )
        }
    }
    return validator;
}


function getConditionsValidator(conditions: IConditions) {
    let validators = conditions.map(getUnitValidator);

    return function (el: Element) {
        for (let i = validators.length - 1; i >= 0; i -= 1) {
            let res = validators[i](el);
            if (res) {
                if (res !== true) {
                    el = res;
                }
            } else {
                return false;
            }
        }
        return el;
    }
}

function getCombinationValidator(
    left: (el: Element) => false | Element,
    combinator: string,
    right: (el: Element) => false | Element
) {
    switch (combinator) {
        case ",":
            return function (el: Element) {
                return left(el) || right(el);
            }
        case ">":
            return function (el: Element) {
                let result = right(el);
                if (result) {
                    let parentElement = result.parentElement;
                    result = parentElement && left(parentElement);
                }
                return result;
            }
        case "+":
            return function (el: Element) {
                let result = right(el);
                if (result) {
                    let prevElement = result.previousElementSibling;
                    result = prevElement && left(prevElement);
                }
                return result;
            }
        case "~":
            return function (el: Element) {

                let result: Element | false;
                let prevElement = right(el);

                if (prevElement) {
                    do {
                        prevElement = prevElement.previousElementSibling;
                    } while (prevElement && !(result = left(prevElement)))
                }

                return result;

            }
        default:
            return function (el: Element) {

                let result: Element | false;
                let parentElement = right(el);

                if (parentElement) {
                    do {
                        parentElement = parentElement.parentElement;
                    } while (parentElement && !(result = left(parentElement)))
                }
                return result;
            }
    }
}



function checkNth(
    children: ArrayLike<Element>,
    node: Element,
    nth: string,
    isLastModel?: number | boolean
) {

    let index = Array.prototype.indexOf.call(
        children,
        node
    );

    index = isLastModel ? (children.length - index) : (index + 1);

    if (nth === "odd") {
        return index % 2 === 1;
    }
    if (nth === "even") {
        return index % 2 === 0;
    }
    return nth == index;
}

function getPesudoClassValidator({ name, value }: any) {
    let marks = 0;
    switch (name) {
        case "empty":
            return function (node: Element) {
                return !node.firstElementChild;
            }
        case "root":
            return function (node: Element) {
                return node.ownerDocument.documentElement === node;
            }
        case "not":
            marks = 1;
        case "is":
            let analyzer = selectorToMatcher(value);
            return function (node: Element) {
                return analyzer(node) ? !marks : !!marks;
            }
        case "only-child":
            return function (node: Element) {
                let parentNode = node.parentNode;
                return parentNode.children.length <= 1;
            }
        case "only-of-type":
            return function (node: Element) {
                let tagName = node.tagName;
                let children = node.parentNode.children;
                for (let i = 0; i < children.length; i += 1) {
                    let child = children[i];
                    if (child !== node && child.tagName === tagName) {
                        return false;
                    }
                }
                return true;
            }
        case "first-child":
            return function (node: Element) {
                return node === node.parentNode.firstElementChild;
            }
        case "last-child":
            return function (node: Element) {
                return node === node.parentNode.lastElementChild;
            }
        case "first-of-type":
            return function (node: Element) {
                let tagName = node.tagName;
                while ((node = node.previousElementSibling)) {
                    if (node.tagName === tagName) {
                        return false;
                    }
                }
                return true;
            }
        case "last-of-type":
            return function (node: Element) {
                let tagName = node.tagName;
                while ((node = node.nextElementSibling)) {
                    if (node.tagName === tagName) {
                        return false;
                    }
                }
                return true;
            }
        case "nth-last-child":
            marks = 1;
        case "nth-child":
            return function (node: Element) {
                return checkNth(
                    node.parentNode.children,
                    node,
                    value,
                    marks
                );
            }
        case "nth-last-of-type":
            marks = 1;
        case "nth-of-type":
            return function (node: Element) {
                let tagName = node.tagName;
                let children = Array.prototype.filter.call(
                    node.parentNode.children,
                    function (child: Element) {
                        return child.tagName === tagName;
                    }
                )
                return checkNth(
                    children,
                    node,
                    value,
                    marks
                );
            }
        default:
            if (pesudoClassValidatorGenerator) {
                let validator = pesudoClassValidatorGenerator(name);
                if (validator) {
                    return validator;
                }
            }
            throwUncaughtException(name);
            return function () {
                return false;
            }
    }
}

function getUnitValidator(token: any) {
    let { type, name } = token;
    switch (type) {
        case "all":
            return function (node: Element) {
                return true;
            }
        case "class":
            return function (node: Element) {
                return node.classList.contains(name);
            }
        case "id":
            return function (node: Element) {
                return node.id === name;
            }
        case "tag":
            name = name.toUpperCase();
            return function (node: Element) {
                return node.tagName === name;
            }
        case "attribute":
            let { op, value } = token;
            let before = "";
            let after = "";

            if (/^("|')[\s\S]*\1$/.test(value)) {
                value = value.slice(1, -1);
            }
            switch (op) {
                case "*=":
                case "~=":
                    break;
                case "^=":
                case "|=":
                    before = "^";
                    break;
                case "$=":
                    after = "$";
                    break;
                case "=":
                    return function (node: Element) {
                        return node.getAttribute(name) === value;
                    }
                default:
                    return function (node: Element) {
                        return node.hasAttribute(name);
                    }
            }

            let regexp = new RegExp(before + value.split("").join("\\") + after);

            return function (node: Element) {
                return regexp.test(node.getAttribute(name));
            }
        case "pesudoClass":
            return getPesudoClassValidator(token);
    }
}


function throwUncaughtException(msg: string) {
    msg = `You may need to add missing validator '${msg}'`;
    console.warn(msg);
}