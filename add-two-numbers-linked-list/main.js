/* function ListNode (val) {
  this.val = val
  this.next = null
} */

function addTwoNumbersByLinkedList (l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  // We take in count a remainder number
  let carryOver = 0;
  while (l1 || l2 ) {
    // Check each list separate for not access an element that not exists
    let v1 = (l1 && l1.val) || 0;
    let v2 = (l2 && l2.val) || 0;

    let sum = v1 + v2 + carryOver;
    // After sum, we need to asign the carryOver properly by dividing by base 10
    carryOver = Math.floor(sum / 10);
    // We fix the value of the sum, taking in care the module by 10
    sum = sum % 10;
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    // Check each list separate for not access an element that not exists
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }

  return result.next;
}
