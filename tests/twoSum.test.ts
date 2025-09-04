import twoSum from '../src/problems/easy/twoSum';

describe('Two Sum', () => {
    test('finds indices of numbers that add up to target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('returns empty array when no solution exists', () => {
        expect(twoSum([1, 2, 3], 10)).toEqual([]);
    });
});