/**
 * Definition for singly-linked list.
 * Utility class for linked list problems
 */
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    /**
     * Convert array to linked list
     * @param arr - Array of numbers
     * @returns Head of the linked list
     */
    static fromArray(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;
        
        let head = new ListNode(arr[0]);
        let current = head;
        
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        
        return head;
    }

    /**
     * Convert linked list to array
     * @param head - Head of the linked list
     * @returns Array of values
     */
    static toArray(head: ListNode | null): number[] {
        const result: number[] = [];
        let current = head;
        
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        
        return result;
    }

    /**
     * Convert linked list to string for easy debugging
     * @returns String representation of the linked list
     */
    toString(): string {
        return ListNode.toArray(this).join(' -> ');
    }
}

export default ListNode;