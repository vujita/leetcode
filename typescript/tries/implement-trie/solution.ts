// #208 Implement Trie (Prefix Tree)
// Implement insert(word), search(word) → bool, startsWith(prefix) → bool

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
