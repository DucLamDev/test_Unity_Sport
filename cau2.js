const twoSum = (nums, target) => {
    const seen = new Map();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            result.push([seen.get(complement), i]);
        }

        seen.set(nums[i], i);
    }

    return result;
};

const twoSumBruteForce = (nums, target) => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

const twoSumTwoPointers = (nums, target) => {
    const numsWithIndex = nums.map((num, index) => [num, index]);
    
    numsWithIndex.sort((a, b) => a[0] - b[0]);

    let left = 0, right = numsWithIndex.length - 1;
    const result = [];

    while (left < right) {
        const sum = numsWithIndex[left][0] + numsWithIndex[right][0];

        if (sum === target) {
            result.push([numsWithIndex[left][1], numsWithIndex[right][1]]);
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return result;
};

const twoSumUsingSet = (nums, target) => {
    const seen = new Set();
    const result = [];

    nums.forEach((num, index) => {
        const complement = target - num;
        if (seen.has(complement)) {
            result.push([nums.indexOf(complement), index]);
        }
        seen.add(num);
    });

    return result;
};

// Ví dụ
console.log(twoSum([2, 7, 11, 15], 9)); // [[0, 1]]
console.log(twoSum([3, 2, 4, 3], 6)); // [[1, 2], [0, 3]]


// Import các hàm cần test
const testTwoSumFunctions = (functions) => {
    const testCases = [
        {
            description: "Có một cặp thỏa mãn",
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [[0, 1]],
        },
        {
            description: "Có nhiều cặp thỏa mãn",
            nums: [3, 2, 4, 3],
            target: 6,
            expected: [[1, 2], [0, 3]],
        },
        {
            description: "Không có cặp thỏa mãn",
            nums: [1, 2, 3],
            target: 7,
            expected: [],
        },
        {
            description: "Có số âm trong mảng",
            nums: [-1, -2, -3, 4, 5],
            target: 2,
            expected: [[2, 4]],
        },
        {
            description: "Mảng trống",
            nums: [],
            target: 5,
            expected: [],
        },
        {
            description: "Chỉ có một phần tử",
            nums: [5],
            target: 5,
            expected: [],
        },
        {
            description: "Mảng có các giá trị trùng lặp",
            nums: [1, 3, 3, 4, 5],
            target: 6,
            expected: [[0, 3], [1, 2]],
        },
        {
            description: "Target bằng 0 với giá trị âm và dương",
            nums: [-3, 1, 2, 3],
            target: 0,
            expected: [[0, 3]],
        },
        {
            description: "Target là số âm",
            nums: [-4, -2, -3, 0, 1],
            target: -5,
            expected: [[0, 2]],
        },
        {
            description: "Giá trị lớn và nhỏ nhất trong mảng",
            nums: [-1000000, 500000, 1000000],
            target: 0,
            expected: [[0, 2]],
        },
    ];

    // Duyệt qua từng hàm
    functions.forEach(({ name, func }) => {
        console.log(`\nTesting function: ${name}`);
        testCases.forEach(({ description, nums, target, expected }, index) => {
            const result = func(nums, target);

            // Kiểm tra kết quả
            const isCorrect = JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
            console.log(
                `Test Case ${index + 1}: ${description} - ${
                    isCorrect ? "PASSED" : "FAILED"
                }`
            );
            if (!isCorrect) {
                console.log(`  Input: nums = ${nums}, target = ${target}`);
                console.log(`  Expected: ${JSON.stringify(expected)}`);
                console.log(`  Got: ${JSON.stringify(result)}`);
            }
        });
    });
};

// Định nghĩa các hàm cần test
const functions = [
    { name: "twoSum", func: twoSum },
];

// Gọi hàm test
(() => testTwoSumFunctions(functions))();
