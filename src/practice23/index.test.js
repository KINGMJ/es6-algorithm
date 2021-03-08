import { arrayToTree } from "../structure/binaryTree";
import { inorderTraversal } from "./index";

describe("二叉树的中序遍历 -> 递归解法", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(inorderTraversal(tree)).toStrictEqual([1, 3, 2]);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    expect(inorderTraversal(tree)).toStrictEqual([]);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(inorderTraversal(tree)).toStrictEqual([1]);
  });

  test("[1,2]", () => {
    const tree = arrayToTree([1, 2]);
    expect(inorderTraversal(tree)).toStrictEqual([2, 1]);
  });

  test("[1,null,2]", () => {
    const tree = arrayToTree([1, null, 2]);
    expect(inorderTraversal(tree)).toStrictEqual([1, 2]);
  });
});
