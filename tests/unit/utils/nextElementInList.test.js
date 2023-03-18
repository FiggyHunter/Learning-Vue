import nextElementInList from '@/utils/nextElementInList';
import { describe, expect } from 'vitest';

describe('nextElementInList', () => {
  it('locates element in the list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });
  describe('when element is at the end of the list', () => {
    it('locates next element at start of list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';
      const result = nextElementInList(list, value);
      console.log(result);
      expect(result).toBe('A');
    });
  });
});
