import { findTilt } from "./index";
import { arrayToTree } from "../structure/binaryTree";
describe("二叉树的坡度测试", () => {
  test("空节点的坡度", () => {
    const tree = arrayToTree([]);
    expect(findTilt(tree)).toStrictEqual(0);
  });

  test("[1,2,3]的坡度", () => {
    const tree = arrayToTree([1, 2, 3]);
    expect(findTilt(tree)).toStrictEqual(1);
  });

  test("[4,2,9,3,5,null,7]的坡度", () => {
    const tree = arrayToTree([4, 2, 9, 3, 5, null, 7]);
    expect(findTilt(tree)).toStrictEqual(15);
  });

  test("[21,7,14,1,1,2,2,3,3]的坡度", () => {
    const tree = arrayToTree([21, 7, 14, 1, 1, 2, 2, 3, 3]);
    expect(findTilt(tree)).toStrictEqual(9);
  });
});
