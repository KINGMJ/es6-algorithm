import { arrayToTree } from "../structure/binaryTree";
import { levelOrderBottom } from "./index";

describe("二叉树的层序遍历", () => {
  test("[1, null,2,3]", () => {
    const tree = arrayToTree([1, null, 2, 3]);
    expect(levelOrderBottom(tree)).toStrictEqual([[3], [2], [1]]);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    console.log(tree);
    expect(levelOrderBottom(tree)).toStrictEqual([]);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(levelOrderBottom(tree)).toStrictEqual([[1]]);
  });

  test("[1,2]", () => {
    const tree = arrayToTree([1, 2]);
    expect(levelOrderBottom(tree)).toStrictEqual([[2], [1]]);
  });
  test("[1,2,3,null,null,4,5]", () => {
    const tree = arrayToTree([1, 2, 3, null, null, 4, 5]);
    console.log(levelOrderBottom(tree));
    expect(levelOrderBottom(tree)).toStrictEqual([[4, 5], [2, 3], [1]]);
  });

  test("[1,2,3,4,5,6,null,null,7]", () => {
    const tree = arrayToTree([1, 2, 3, 4, 5, 6, null, null, 7]);
    expect(levelOrderBottom(tree)).toStrictEqual([[7], [4, 5, 6], [2, 3], [1]]);
  });
});
