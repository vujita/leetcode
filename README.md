# LeetCode Practice

TypeScript-first, Java-ready monorepo for NeetCode 75.

## Quick Start

```bash
cd typescript
npm install
npm test                        # watch mode
npm run test:run                # single pass
TRACE=1 npx vitest run arrays-hashing/two-sum   # visualize steps
```

## Scaffold a new problem

```bash
bash new-problem.sh <category> <slug>
bash new-problem.sh arrays-hashing contains-duplicate
bash new-problem.sh trees invert-binary-tree java   # java variant
```

## Structure

```
leetcode/
├── typescript/
│   ├── _utils/trace.ts          ← learning visualizer
│   ├── arrays-hashing/
│   │   └── two-sum/
│   │       ├── solution.ts      ← implement here
│   │       └── solution.test.ts ← tests + trace hints
│   ├── two-pointers/
│   ├── sliding-window/
│   ├── stack/
│   ├── binary-search/
│   ├── linked-list/
│   ├── trees/
│   ├── tries/
│   ├── heap-priority-queue/
│   ├── backtracking/
│   ├── graphs/
│   ├── 1d-dp/
│   ├── 2d-dp/
│   ├── greedy/
│   ├── intervals/
│   ├── math-geometry/
│   └── bit-manipulation/
└── java/                        ← ready when you need it
```

## Trace / Visualize

Add `import { trace } from '../../_utils/trace.js'` to any solution, then call:

```typescript
trace.step('label', data);                   // log a step
trace.array(nums, { L: left, R: right });    // array + pointers
trace.stack(stack);                          // stack state
trace.linkedList(vals);                      // linked list
trace.binaryTree([4,2,6,1,3,5,7]);          // tree (level-order)
trace.map(seen);                             // hashmap
trace.divider('round 2');                    // separator
```

Enable with `TRACE=1` — silent by default so tests stay clean.

---

## NeetCode 75 Checklist

### Arrays & Hashing
- [ ] #217 Contains Duplicate
- [ ] #242 Valid Anagram
- [x] #1 Two Sum ← example
- [ ] #49 Group Anagrams
- [ ] #347 Top K Frequent Elements
- [ ] #238 Product of Array Except Self
- [ ] #271 Encode and Decode Strings *(premium)*
- [ ] #128 Longest Consecutive Sequence

### Two Pointers
- [ ] #125 Valid Palindrome
- [ ] #15 3Sum
- [ ] #11 Container With Most Water

### Sliding Window
- [ ] #121 Best Time to Buy and Sell Stock
- [ ] #3 Longest Substring Without Repeating Characters
- [ ] #424 Longest Repeating Character Replacement
- [ ] #76 Minimum Window Substring

### Stack
- [ ] #20 Valid Parentheses

### Binary Search
- [ ] #153 Find Minimum in Rotated Sorted Array
- [ ] #33 Search in Rotated Sorted Array

### Linked List
- [ ] #206 Reverse Linked List
- [ ] #21 Merge Two Sorted Lists
- [ ] #143 Reorder List
- [ ] #19 Remove Nth Node From End of List
- [ ] #141 Linked List Cycle
- [ ] #23 Merge K Sorted Lists

### Trees
- [ ] #226 Invert Binary Tree
- [ ] #104 Maximum Depth of Binary Tree
- [ ] #100 Same Tree
- [ ] #572 Subtree of Another Tree
- [ ] #235 Lowest Common Ancestor of a BST
- [ ] #102 Binary Tree Level Order Traversal
- [ ] #98 Validate Binary Search Tree
- [ ] #230 Kth Smallest Element in a BST
- [ ] #105 Construct Binary Tree from Preorder and Inorder Traversal
- [ ] #124 Binary Tree Maximum Path Sum
- [ ] #297 Serialize and Deserialize Binary Tree

### Tries
- [ ] #208 Implement Trie (Prefix Tree)
- [ ] #211 Design Add and Search Words Data Structure
- [ ] #212 Word Search II

### Heap / Priority Queue
- [ ] #347 Top K Frequent Elements
- [ ] #295 Find Median From Data Stream

### Backtracking
- [ ] #39 Combination Sum
- [ ] #79 Word Search

### Graphs
- [ ] #200 Number of Islands
- [ ] #133 Clone Graph
- [ ] #417 Pacific Atlantic Water Flow
- [ ] #207 Course Schedule
- [ ] #128 Longest Consecutive Sequence
- [ ] #261 Graph Valid Tree *(premium)*
- [ ] #323 Number of Connected Components *(premium)*
- [ ] #269 Alien Dictionary *(premium)*

### 1-D Dynamic Programming
- [ ] #70 Climbing Stairs
- [ ] #198 House Robber
- [ ] #213 House Robber II
- [ ] #5 Longest Palindromic Substring
- [ ] #647 Palindromic Substrings
- [ ] #91 Decode Ways
- [ ] #322 Coin Change
- [ ] #152 Maximum Product Subarray
- [ ] #139 Word Break
- [ ] #300 Longest Increasing Subsequence
- [ ] #416 Partition Equal Subset Sum

### 2-D Dynamic Programming
- [ ] #62 Unique Paths
- [ ] #1143 Longest Common Subsequence

### Greedy
- [ ] #53 Maximum Subarray
- [ ] #55 Jump Game

### Intervals
- [ ] #57 Insert Interval
- [ ] #56 Merge Intervals
- [ ] #435 Non-overlapping Intervals
- [ ] #252 Meeting Rooms *(premium)*
- [ ] #253 Meeting Rooms II *(premium)*

### Math & Geometry
- [ ] #48 Rotate Image
- [ ] #54 Spiral Matrix
- [ ] #73 Set Matrix Zeroes

### Bit Manipulation
- [ ] #371 Sum of Two Integers
- [ ] #191 Number of 1 Bits
- [ ] #338 Counting Bits
- [ ] #190 Reverse Bits
- [ ] #268 Missing Number
