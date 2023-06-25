/* Linked Lists - Get Nth

Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2

The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).
*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  // track which node we are at and traverse until nth node reached
  let currentNodeIndex = 0;
  while (currentNodeIndex !== index) {
    currentNodeIndex++;
    node = node.next;
  }
  // if we went out of list throw an error else return the node
  if (!node) throw new Error('index out of range');
  return node;
}