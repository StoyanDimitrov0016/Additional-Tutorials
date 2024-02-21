const accordionData = [
    {
        id: '1',
        question: "What are the primitive datatypes in JavaScript?",
        answer: "Primitive datatypes include Number, String, Boolean, Undefined, Null, BigInt (introduced in ES2020), and Symbol (introduced in ES6)."
    },
    {
        id: '2',
        question: "Explain the difference between '==' and '===' operators in JavaScript.",
        answer: "The '==' operator performs type coercion before comparison, while '===' (strict equality) checks both value and type without coercion. Use '===' for strict equality comparisons to avoid unexpected behavior."
    },
    {
        id: '3',
        question: "What is variable hoisting in JavaScript?",
        answer: "Variable hoisting is a JavaScript behavior where variable declarations are moved to the top of their containing scope during the compile phase. However, only the declarations are hoisted, not the initializations. This means variables declared with 'var' are accessible before they are declared but will have an initial value of 'undefined'."
    },
    {
        id: '4',
        question: "How do you add an element to the end of an array in JavaScript?",
        answer: "You can add an element to the end of an array using the 'push()' method. For example: 'myArray.push(newElement)'. This method adds 'newElement' to the end of 'myArray' and returns the new length of the array."
    },
    {
        id: '5',
        question: "How do you access nested properties of an object in JavaScript?",
        answer: "To access nested properties of an object, you can use dot notation or bracket notation. For example, 'myObject.propertyName' or 'myObject['propertyName']'. For nested properties, use multiple dot or bracket notations, such as 'myObject.nestedObject.propertyName' or 'myObject['nestedObject']['propertyName']'."
    }
];

export default accordionData;