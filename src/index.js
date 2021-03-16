import { arrayToTree } from "./structure/binaryTree";
import { levelOrder } from "./practice27/index1";

const tree = arrayToTree([1, 2, 3, null, null, 4, 5]);
console.log(levelOrder(tree));
