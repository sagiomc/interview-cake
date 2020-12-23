class ListNode {

  public val: number;
  public next: ListNode | null;

  public constructor(value: number) {
    this.val = value;
    this.next = null;
  }

  public toString(): string {
    const symbol = ' -> ';
    let tmpNode: ListNode | null = this.next;
    let listNodeStr: string = this.val.toString();
    while (tmpNode) {
      listNodeStr = listNodeStr + symbol + tmpNode.val;
      tmpNode = tmpNode.next;
    }

    return listNodeStr;
  }
}


function mergeSortedLinkedList (listOne: ListNode | null, listTwo: ListNode | null) {
  let currentNode: ListNode = new ListNode(0);
  let mergedList: ListNode = currentNode;

  while (listOne != null && listTwo != null) {

    if (listOne.val < listTwo.val){
      currentNode.next = new ListNode(listOne.val);
      listOne = listOne.next
    } else {
      currentNode.next = new ListNode(listTwo.val);
      listTwo = listTwo.next;
    }

    currentNode = currentNode.next;
  }

  if (listOne != null) currentNode.next = listOne;
  if (listTwo != null) currentNode.next = listTwo;

  return mergedList.next;
}

function convertArrayToLinkedList (arr: Array<number>): ListNode | null {
  let currentNode = new ListNode(0);
  let linkedList = currentNode;
  for (const element of arr) {
    currentNode.next = new ListNode(element);
    currentNode = currentNode.next;
  }

  return linkedList.next;
}

// Tests
let l1, l2, mergedList: ListNode | null;

l2 = convertArrayToLinkedList([2, 9, 11, 14]);
l1 = convertArrayToLinkedList([3, 7, 12, 13]);
mergedList = mergeSortedLinkedList(l1, l2)
if (mergedList) console.log(mergedList.toString() === '2 -> 3 -> 7 -> 9 -> 11 -> 12 -> 13 -> 14');

l2 = convertArrayToLinkedList([2, 9, 11, 14]);
l1 = convertArrayToLinkedList([3, 7, 12, 13, 15, 16, 17, 25]);
mergedList = mergeSortedLinkedList(l1, l2)
if (mergedList) console.log(mergedList.toString() === '2 -> 3 -> 7 -> 9 -> 11 -> 12 -> 13 -> 14 -> 15 -> 16 -> 17 -> 25');

l2 = convertArrayToLinkedList([2, 9, 11, 14]);
l1 = convertArrayToLinkedList([3, 7]);
mergedList = mergeSortedLinkedList(l1, l2)
if (mergedList) console.log(mergedList.toString() === '2 -> 3 -> 7 -> 9 -> 11 -> 14');
