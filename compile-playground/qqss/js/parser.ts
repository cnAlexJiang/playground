

type IConditions = Record<string, any>[];
type ISelector = Array<IConditions | string>;
type ISelectorContext = {
    input: string,
    start: number,
    index: number,
    elementSelector: ISelector,
    pseudoElementSelector?: Record<string, ISelector>
}

let input: string;

let index: number;

export {
    IConditions, ISelector, ISelectorContext, parseSelector
}
export default parseSelector;


function parseSelector(selectorText: string, start: number = 0): ISelectorContext {

    let _input_bak = input;
    let _index_bak = index;

    input = selectorText;
    index = start;

    let elementSelector = [];
    let pseudoElementSelector = {};
    let selector: ISelector = [];

    let token: any;
    let hasPseudoElement = false;

    while (true) {
        let tokens = [];
        skipNonsenses();

        if ((token = getTagSelector())) {
            tokens.push(token);
        }
        while (
            (token = getIdSelector()
                || getClassSelector()
                || getAttributeSelector()
                || getPseudoClassSelector())
        ) {
            tokens.push(token);
        }
        if (!tokens.length) {
            break;
        }
        selector.push(tokens);

        if ((token = getPseudoElementSelector())) {
            let name = token.name;
            hasPseudoElement = true;
            concat(pseudoElementSelector[name] || (pseudoElementSelector[name] = []));
            if (matchChar(",")) {
                continue;
            }
            break;
        }
        skipNonsenses();

        if (matchChar(",")) {
            concat(elementSelector);
            continue;
        }
        if (/>|\+|~/.test(input[index])) {
            selector.push(input[index++]);
        } else {
            selector.push(" ")
        }
    }
    if (selector.length) {
        selector.pop();
        concat(elementSelector);
    }

    let result = {
        input, start, index,
        elementSelector,
        pseudoElementSelector: hasPseudoElement ? pseudoElementSelector : null
    };
    input = _input_bak;
    index = _index_bak;

    return result;

    function concat(target: ISelector) {
        target.length && target.push(",");
        target.push(...selector);
        selector = [];
    }




}


function skipNonsenses() {
    while (/\s/.test(input[index])) {
        index += 1;
    }
}
function getNumber() {
    skipNonsenses();
    if (matchString("odd")) {
        return "odd";
    }
    if (matchString("even")) {
        return "even";
    }
    let offset = 0;
    while (/\d/.test(input[index + offset])) {
        offset += 1;
    }
    if (offset) {
        return input.slice(index, index += offset);
    }
}
function getName() {
    let name = input[index];
    if (/^[a-zA-Z_-]$/.test(name)) {
        while (/^[a-zA-Z0-9_-]$/.test(input[++index])) {
            name += input[index];
        }
        return name;
    }
}

function matchChar(char: string) {
    if (input[index] === char) {
        index += 1;
        return true;
    }
}

function matchString(str: string) {
    let offset = 0;
    while (offset < str.length) {
        if (str[offset] !== input[index + offset]) {
            return false;
        }
        offset += 1;
    }
    index += offset;
    return str;
}

function getTokenByType(type: string) {
    skipNonsenses();
    let token = getIdSelector()
        || getClassSelector();
    if (token) {
        return token;
    }
    let name = getName();
    if (name) {
        return { type, name: name };
    }
}

function getClassSelector() {
    if (matchChar(".")) {
        return getTokenByType("class");
    }
}
function getIdSelector() {
    if (matchChar("#")) {
        return getTokenByType("id");
    }
}
function getTagSelector() {
    if (matchChar("*")) {
        return {
            type: "all",
        }
    }
    let tagName = getName();
    if (tagName) {
        return { type: "tag", name: tagName };
    }
}
function getAttributeSelector() {

    let start = index;
    if (matchChar("[")) {
        skipNonsenses();
        let token = getTokenByType("attribute");
        skipNonsenses();
        if (input[index] !== "]") {
            if (matchChar("=")) {
                token.op = "=";
            } else if (
                input[index + 1] === "="
                && /[\~\|\^\$\*]/.test(input[index])
            ) {
                token.op = input.slice(index, index += 2);
            }
            skipNonsenses();

            let strend_reg =
                input[index] === "'"
                    ? /[^\\](\\\\)*'/g
                    : (
                        input[index] === "\"" && /[^\\](\\\\)*"/g
                    );

            if (strend_reg) {

                let start = strend_reg.lastIndex = index;
                let res = strend_reg.exec(input);
                index = res && strend_reg.lastIndex || input.length;

                token.value = input.slice(start, index);
            } else {
                token.value = getName();
            }
            skipNonsenses();
        }
        matchChar("]");

        token.raw = input.slice(start, index);
        return token;
    }

}

function getPseudoClassSelector() {
    let start = index;
    if (matchChar(":")) {
        let name = getName();
        if (name) {
            let value: any;
            switch (name) {
                case "any":
                case "is":
                case "not":
                    if (matchChar("(")) {
                        value = parseSelector(input, index);

                        index = value.index;
                        skipNonsenses();
                        matchChar(")");
                    }
                    break;
                case "nth-child":
                case "nth-last-child":
                case "nth-of-type":
                case "nth-last-of-type":
                    skipNonsenses();
                    if (matchChar("(")) {
                        value = getNumber();
                        skipNonsenses();
                        matchChar(")")
                    }
                    break;
            }
            return {
                type: "pesudoClass",
                name,
                value
            }
        }
        index = start;
        //return getTokenByType("pesudoClass");
    }
}
function getPseudoElementSelector() {
    if (matchChar(":")) {
        while (matchChar(":"));
        return getTokenByType("pesudoElement");
    }
}
