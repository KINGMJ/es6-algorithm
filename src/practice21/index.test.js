import BinaryTree from "./index";

describe("严格表示数组转二叉树", () => {
  test("空数组", () => {
    const binaryTree = new BinaryTree();
    console.log(binaryTree.arrayToTree([]));
  });
  test("满二叉树", () => {
    const binaryTree = new BinaryTree();
    console.log(binaryTree.arrayToTree([1, 2, 3, 4, 5, 6, 7]));
  });

  test("完全二叉树", () => {
    const binaryTree = new BinaryTree();
    console.log(binaryTree.arrayToTree([1, 2, 3, 4, null, null, 7]));
  });

  test("其他", () => {
    const binaryTree = new BinaryTree();
    console.log(
      binaryTree.arrayToTree([
        2,
        null,
        4,
        null,
        null,
        9,
        8,
        null,
        null,
        null,
        null,
        null,
        null,
        4,
      ])
    );
  });
});

describe("非严格表示数组转二叉树", () => {
  test("其他", () => {
    const binaryTree = new BinaryTree();
    console.log(binaryTree.arrayToTree1([2, null, 4, 9, 8, null, null, 4]));
  });
});
