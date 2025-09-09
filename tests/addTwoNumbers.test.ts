import addTwoNumbers from '../src/problems/easy/addTwoNumbers';
import ListNode from '../src/utils/ListNode';

describe('Add Two Numbers', () => {
    // Helper function to create linked lists from arrays
    const createLinkedList = (arr: number[]): ListNode | null => {
        if (arr.length === 0) return null;
        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    };

    // Helper function to convert linked list to array
    const linkedListToArray = (head: ListNode | null): number[] => {
        const result: number[] = [];
        let current = head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    };

    test('Example 1: [2,4,3] + [5,6,4] = [7,0,8]', () => {
        const l1 = createLinkedList([2, 4, 3]);
        const l2 = createLinkedList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    test('Example 2: [0] + [0] = [0]', () => {
        const l1 = createLinkedList([0]);
        const l2 = createLinkedList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0]);
    });

    test('Example 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]', () => {
        const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createLinkedList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    test('Single digit with carry: [5] + [7] = [2,1]', () => {
        const l1 = createLinkedList([5]);
        const l2 = createLinkedList([7]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([2, 1]);
    });

    test('Different length lists: [1,8] + [0] = [1,8]', () => {
        const l1 = createLinkedList([1, 8]);
        const l2 = createLinkedList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([1, 8]);
    });

    test('Multiple carries: [9,9,9] + [1] = [0,0,0,1]', () => {
        const l1 = createLinkedList([9, 9, 9]);
        const l2 = createLinkedList([1]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0, 0, 0, 1]);
    });

    test('One empty list (should not happen per constraints but test anyway)', () => {
        const l1 = createLinkedList([1, 2, 3]);
        const l2 = createLinkedList([]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    test('Both empty lists (edge case)', () => {
        const l1 = createLinkedList([]);
        const l2 = createLinkedList([]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0]); // Should return [0] as per problem statement
    });
});