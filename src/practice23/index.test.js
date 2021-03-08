import { arrayToTree } from "../structure/binaryTree";
import { inorderTraversal } from "./index";

describe("二叉树的中序遍历 -> 递归解法", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(inorderTraversal(tree)).toStrictEqual([1, 3, 2]);
  });

  test(" []", () => {
    const tree = arrayToTree([]);
    console.log(tree);
    expect(inorderTraversal(tree)).toStrictEqual([]);
  });
});
