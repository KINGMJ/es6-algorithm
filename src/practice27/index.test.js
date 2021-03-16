import { arrayToTree } from "../structure/binaryTree";
import { levelOrder } from "./index2";

describe("二叉树的层序遍历", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(levelOrder(tree)).toStrictEqual([[1], [2], [3]]);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    console.log(tree);
    expect(levelOrder(tree)).toStrictEqual([]);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(levelOrder(tree)).toStrictEqual([[1]]);
  });

  test("[1,2]", () => {
    const tree = arrayToTree([1, 2]);
    expect(levelOrder(tree)).toStrictEqual([[1], [2]]);
  });
  test("[1,2,3,null,null,4,5]", () => {
    const tree = arrayToTree([1, 2, 3, null, null, 4, 5]);
    console.log(levelOrder(tree));
    expect(levelOrder(tree)).toStrictEqual([[1], [2, 3], [4, 5]]);
  });

  test("[1,2,3,4,5,6,null,null,7]", () => {
    const tree = arrayToTree([1, 2, 3, 4, 5, 6, null, null, 7]);
    expect(levelOrder(tree)).toStrictEqual([[1], [2, 3], [4, 5, 6], [7]]);
  });
});
