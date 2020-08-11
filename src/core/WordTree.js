export class WordTree {
  root;

  constructor() {
    this.root = null;
  }

  store(value) {
    if (!value) throw new Error("Cannot store an empty value.");

    if (!this.root) {
      this.root = new WordTreeNode();
    }

    this.storeInNode(value, 0, this.root);
  }

  storeInNode(value, index, node) {
    if (index === value.length) {
      node.value = value;
      return;
    }

    const character = value[index];

    let childNode = node.children[character];
    if (!childNode) {
      childNode = node.children[character] = new WordTreeNode();
    }

    this.storeInNode(value, index + 1, childNode);
  }

  retrieve(value) {
    if (!value) return;

    const list = [];

    this.retrieveInNode(value, 0, this.root, list);

    return list;
  }

  retrieveInNode(value, index, node, list) {
    if (index >= value.length) {
      if (node.value) {
        list.push(node.value);
      }

      for (let child in node.children) {
        this.retrieveInNode(value, index + 1, node.children[child], list);
      }
      return;
    }

    let childNode = node.children[value[index]];
    if (!childNode) return;

    this.retrieveInNode(value, index + 1, childNode, list);
  }
}

export class WordTreeNode {
  value;
  children;

  constructor() {
    this.value = null;
    this.children = {};
  }
}
