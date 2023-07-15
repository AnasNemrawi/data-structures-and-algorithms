function validateBrackets(S) {
    const stack = [];
    const LBracket = ['(', '[', '{'];
    const RBracket = [')', ']', '}'];
    const bracketPair = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (LBracket.includes(char)) {
            stack.push(char);
        } else if (RBracket.includes(char)) {
            if (stack.length === 0 || bracketPair[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// true
console.log(validateBrackets("{}"));
console.log(validateBrackets("{}(){}"));
console.log(validateBrackets("()[[Extra Characters]]"));
console.log(validateBrackets("(){}[[]]"));
console.log(validateBrackets("{}{Code}[Fellows](())"));

// false
console.log(validateBrackets("[({}]"));
console.log(validateBrackets("(]("));
console.log(validateBrackets("{(})"));  
