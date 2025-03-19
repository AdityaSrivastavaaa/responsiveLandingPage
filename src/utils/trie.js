class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word.toLowerCase()) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(prefix) {
        let node = this.root;
        for (const char of prefix.toLowerCase()) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }

        const results = [];
        const dfs = (node, prefix) => {
            if (node.isEndOfWord) results.push(prefix);
            for (const [char, childNode] of Object.entries(node.children)) {
                dfs(childNode, prefix + char);
            }
        };

        dfs(node, prefix);
        return results;
    }
}
