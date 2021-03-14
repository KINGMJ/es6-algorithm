import { arrayToTree } from "../structure/binaryTree";
import { postorderTraversal } from "./index1";

describe("二叉树的后续遍历", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(postorderTraversal(tree)).toStrictEqual([3, 2, 1]);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    expect(postorderTraversal(tree)).toStrictEqual([]);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(postorderTraversal(tree)).toStrictEqual([1]);
  });

  test("[1,2]", () => {
    const tree = arrayToTree([1, 2]);
    expect(postorderTraversal(tree)).toStrictEqual([2, 1]);
  });

  test("[1,null,2]", () => {
    const tree = arrayToTree([1, null, 2]);
    expect(postorderTraversal(tree)).toStrictEqual([2, 1]);
  });

  test("[1,2,3,null,null,4,5]", () => {
    const tree = arrayToTree([1, 2, 3, null, null, 4, 5]);
    expect(postorderTraversal(tree)).toStrictEqual([2, 4, 5, 3, 1]);
  });

  test("[1,2,3,4,5,6,null,null,7]", () => {
    const tree = arrayToTree([1, 2, 3, 4, 5, 6, null, null, 7]);
    expect(postorderTraversal(tree)).toStrictEqual([7, 4, 5, 2, 6, 3, 1]);
  });
});
