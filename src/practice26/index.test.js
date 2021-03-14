import { arrayToTree } from "../structure/binaryTree";
import { preorderTraversal } from "./index1";

describe("二叉树的前序遍历", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(preorderTraversal(tree)).toStrictEqual([1, 2, 3]);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    expect(preorderTraversal(tree)).toStrictEqual([]);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(preorderTraversal(tree)).toStrictEqual([1]);
  });

  test("[1,2]", () => {
    const tree = arrayToTree([1, 2]);
    expect(preorderTraversal(tree)).toStrictEqual([1, 2]);
  });

  test("[1,null,2]", () => {
    const tree = arrayToTree([1, null, 2]);
    expect(preorderTraversal(tree)).toStrictEqual([1, 2]);
  });

  test("[1,2,3,null,null,4,5]", () => {
    const tree = arrayToTree([1, 2, 3, null, null, 4, 5]);
    expect(preorderTraversal(tree)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("[1,2,3,4,5,6,null,null,7]", () => {
    const tree = arrayToTree([1, 2, 3, 4, 5, 6, null, null, 7]);
    expect(preorderTraversal(tree)).toStrictEqual([1, 2, 4, 7, 5, 3, 6]);
  });
});
