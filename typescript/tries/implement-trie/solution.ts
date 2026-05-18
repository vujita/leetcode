// #208 Implement Trie (Prefix Tree)
// Implement insert(word), search(word) → bool, startsWith(prefix) → bool
// LeetCode:  https://leetcode.com/problems/implement-trie-prefix-tree/
// NeetCode:  https://neetcode.io/problems/implement-prefix-tree

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

export class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    // TODO
  }

  search(word: string): boolean {
    // TODO
    return false;
  }

  startsWith(prefix: string): boolean {
    // TODO
    return false;
  }
}
