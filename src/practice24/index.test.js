import { arrayToTree } from "../structure/binaryTree";
import { isBalanced } from "./index1";

describe("判断是否是平衡二叉树", () => {
  test("[3,9,20,null,null,15,7]", () => {
    const tree = arrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(isBalanced(tree)).toStrictEqual(true);
  });

  test("[]", () => {
    const tree = arrayToTree([]);
    expect(isBalanced(tree)).toStrictEqual(true);
  });

  test("[1,2,2,3,3,null,null,4,4]", () => {
    const tree = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    expect(isBalanced(tree)).toStrictEqual(false);
  });

  test("[1]", () => {
    const tree = arrayToTree([1]);
    expect(isBalanced(tree)).toStrictEqual(true);
  });

  test("[1,2,2,3,null,null,3,4,null,null,4]", () => {
    const tree = arrayToTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4]);
    expect(isBalanced(tree)).toStrictEqual(false);
  });
});
