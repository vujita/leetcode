// #211 Design Add and Search Words Data Structure
// addWord(word) adds to structure. search(word) supports "." as wildcard matching any letter.
// LeetCode:  https://leetcode.com/problems/design-add-and-search-words-data-structure/
// NeetCode:  https://neetcode.io/problems/design-word-search-data-structure

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

export class WordDictionary {
  private root = new TrieNode();

  addWord(word: string): void {
    // TODO
  }

  search(word: string): boolean {
    // TODO
    return false;
  }
}
