# 167. Two Sum II - Input Array Is Sorted

## Description

<!-- description:start -->
<p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong>, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index<sub>1</sub>]</code> and <code>numbers[index<sub>2</sub>]</code> where <code>1 &lt;= index<sub>1</sub> &lt; index<sub>2</sub> &lt;= numbers.length</code>.</p>

<p>Return<em> the indices of the two numbers, </em><code>index<sub>1</sub></code><em> and </em><code>index<sub>2</sub></code><em>, <strong>added by one</strong> as an integer array </em><code>[index<sub>1</sub>, index<sub>2</sub>]</code><em> of length 2.</em></p>

<p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p>

<p>Your solution must use only constant extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,<u>7</u>,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,3,<u>4</u>], target = 6
<strong>Output:</strong> [1,3]
<strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>-1</u>,<u>0</u>], target = -1
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li>
	<li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>-1000 &lt;= target &lt;= 1000</code></li>
	<li>The tests are generated such that there is <strong>exactly one solution</strong>.</li>
</ul>
<!-- description:end -->

## Solutions
<!-- solution:start -->
**Solution 1: Two pointers**<br />
We define two pointers *left* and *right*, which point to the first element and the last element of the array respectively. Each time we calculate $numbers[left] + numbers[right]$. If the sum is greater than the target value, move the $right$ pointer one step to the left. If the sum is less than the target value, move the $left$ pointer one step to the right. If the sum equals the target, return $[left + 1, right + 1]$ - I don't check for equality first because the case of being equal might not occur immediately. Therefore, I will prioritize checking for greater or less than first.<br />
The time complexity is $O(n)$, where $n$ is the length of the array `numbers`. The space complexity is $O(1)$.

<!-- tabs:start -->
```TS
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left < right) {
        if (numbers[left] + numbers[right] > target) right--;
        else if (numbers[left] + numbers[right] < target) left++;
        else break;
    }
    return [left + 1, right + 1];
};
```
<!-- tabs:end -->
**Solution 2: Hash Table**<br />
I use a ***map*** to search for pairs of values whose sum equals the target. In each iteration, I check whether the remaining value needed to reach the target exists in the map. If not, I store the current value in the map with the structure: { ***key***: *remaining value needed*, ***value***: *index of the stored element*}.
```TS
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map();
    for(let i = 0; i < numbers.length; i++) {
        if (map.has(numbers[i])) {
            return [map.get(numbers[i]) + 1, i + 1];
        } else {
            map.set(target-numbers[i], i);
        }
    }
};
```
<!-- solution:end -->