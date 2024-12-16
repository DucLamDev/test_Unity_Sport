//Thuật toán 1: sử dụng 2 con trỏ
const isPalindrome1 = (s) => {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = filteredString.length - 1;
    while (left < right) {
        if (filteredString[left] !== filteredString[right]) return false;
        left++;
        right--;
    }
    return true;
};

//Thuật toán 2: Sử dụng hàm có sẵn trong javascrip đảo ngược chuỗi
const isPalindrome2 = (s) => {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;
};

//Thuật toán 3: Sử dụng đệ quy
const isPalindrome3 = (s) => {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const checkPalindrome = (left, right) => {
        if (left >= right) return true;
        if (filteredString[left] !== filteredString[right]) return false;
        return checkPalindrome(left + 1, right - 1);
    };

    return checkPalindrome(0, filteredString.length - 1);
};

//Sử dụng Stack
const isPalindrome4 = (s) => {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const stack = [];

    for (let char of filteredString) {
        stack.push(char);
    }
    for (let char of filteredString) {
        if (char !== stack.pop()) {
            return false;
        }
    }
    return true;
};

const isPalindrome = (s) => {
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = filteredString.length - 1;
    while (left < right) {
        if (filteredString[left] !== filteredString[right]) return false;
        left++;
        right--;
    }
    return true;
};

const testIsPalindromeFunctions = (functions) => {
    const testCases = [
        {
            description: "Chuỗi đối xứng đơn giản",
            input: "level",
            expected: true,
        },
        {
            description: "Chuỗi không đối xứng",
            input: "hello",
            expected: false,
        },
        {
            description: "Chuỗi đối xứng có ký tự đặc biệt",
            input: "A man, a plan, a canal, Panama!",
            expected: true,
        },
        {
            description: "Chuỗi rỗng",
            input: "",
            expected: true,
        },
        {
            description: "Chuỗi chỉ chứa một ký tự",
            input: "a",
            expected: true,
        },
        {
            description: "Chuỗi đối xứng với độ dài chẵn",
            input: "abba",
            expected: true,
        },
        {
            description: "Chuỗi không đối xứng với độ dài chẵn",
            input: "abcd",
            expected: false,
        },
        {
            description: "Chuỗi đối xứng đơn giản khác",
            input: "madam",
            expected: true,
        },
        {
            description: "Chuỗi đối xứng không phân biệt chữ hoa chữ thường",
            input: "MadAm",
            expected: true,
        },
        {
            description: "Chuỗi không đối xứng có dấu cách",
            input: "race a car",
            expected: false,
        },
        {
            description: "Chuỗi không đối xứng có ký tự đặc biệt",
            input: "$@hello@#",
            expected: false,
        },
        {
            description: "Chuỗi đối xứng rất lớn",
            input: "a".repeat(10 ** 5) + "a".repeat(10 ** 5).split("").reverse().join(""),
            expected: true,
        },
        {
            description: "Chuỗi đối xứng với chữ số",
            input: "12321",
            expected: true,
        },
    ];

    functions.forEach(({ name, func }) => {
        console.log(`\nTesting function: ${name}`);
        testCases.forEach(({ description, input, expected }, index) => {
            const result = func(input);
            const isCorrect = result === expected;
            console.log(
                `Test Case ${index + 1}: ${description} - ${isCorrect ? "PASSED" : "FAILED"}`
            );
            if (!isCorrect) {
                console.log(`  Input: "${input}"`);
                console.log(`  Expected: ${expected}`);
                console.log(`  Got: ${result}`);
            }
        });
    });
};

// Định nghĩa các hàm kiểm tra palindrome
const functions = [
    { name: "isPalindrome1 (Two Pointers)", func: isPalindrome1 },
    // { name: "isPalindrome2 (String Reverse)", func: isPalindrome2 },
    // { name: "isPalindrome3 (Recursive)", func: isPalindrome3 },
    // { name: "isPalindrome4 (Stack)", func: isPalindrome4 },
];

// Gọi hàm kiểm tra
testIsPalindromeFunctions(functions);



