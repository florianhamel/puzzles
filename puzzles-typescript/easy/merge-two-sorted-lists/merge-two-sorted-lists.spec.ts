import { ListNode, mergeTwoLists } from './merge-two-sorted-lists';

describe('merge two sorted lists', () => {

  it('should merge given lists', () => {
    // Given
    const list1: ListNode[] = [0, 1, 2, 4, 5].map((value) => new ListNode(value, null));
    list1.map((node, index, array) => node.next = array.at(index + 1));

    const list2: ListNode[] = [1, 3, 4, 6].map((value) => new ListNode(value, null));
    list2.forEach((node, index, array) => node.next = array.at(index + 1));

    // When
    const output = mergeTwoLists(list1[0], list2[0]);

    // Then
    const expected = [0, 1, 1, 2, 3, 4, 4, 5, 6];
    let curr = output;
    let i = 0;
    while (curr) {
      expect(curr.val).toBe(expected[i]);
      curr = curr.next;
      ++i;
    }
  });

  it('should merge lists with second empty', () => {
    // Given
    const list1: ListNode[] = [1].map((value) => new ListNode(value, null));
    list1.map((node, index, array) => node.next = array.at(index + 1));

    // When
    const output = mergeTwoLists(list1[0], null);

    // Then
    expect(output.val).toBe(1);
  });
});
