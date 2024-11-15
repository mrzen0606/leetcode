## Description

<!-- description:start -->

<p>Given a non-negative integer <code>c</code>, decide whether there&#39;re two integers <code>a</code> and <code>b</code> such that <code>a<sup>2</sup> + b<sup>2</sup> = c</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> c = 5
<strong>Output:</strong> true
<strong>Explanation:</strong> 1 * 1 + 2 * 2 = 5
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> c = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= c &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<!-- description:end -->

## Solutions

<!-- solution:start -->

### Solution: Two Pointers

We can use the two-pointer method to solve this problem. Define two pointers $l$ and $r$, pointing to $0$ and $\sqrt{c}$(- floor) respectively. In each step, we calculate the value of $rs = l^2 + r^2$, and then compare the size of $rs$ and $c$. If $rs > c$, we decrease the value of $l$ by $1$. If $rs < c$, we increase the value of $l$ by $1$. If $rs = c$, we have found two integers $l$ and $r$ such that $l^2 + r^2 = c$. We continue this process until we find the answer, or the value of $l$ is greater than the value of $r$, and return `false`.

The time complexity is $O(\sqrt{c})$, where $c$ is the given non-negative integer. The space complexity is $O(1)$.

<!-- tabs:start -->
#### Javascript
```
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l = 0, r = Math.floor(Math.sqrt(c)), rs;
    while(l <= r) {
        rs = Math.pow(l,2) + Math.pow(r,2);
        if (rs > c) {
            r--;
        } else if (rs < c) {
            l++;
        } else {
            return true;
        }
    }
    return false;
};
```
<!-- tabs:end -->
<!-- solution:end -->