import { sum } from "@/sum"

describe('group X', () => {
  beforeAll(() => console.log('X: before all'))
  beforeEach(() => console.log('X: before each'))
  test('X: case 1', () => {
    console.log('X: test case 1');
    expect(sum(1, 2)).toBe(3);
  })
  test('X: case 2', () => {
    console.log('X: test case 2');
    expect(sum(1, 2)).toBe(3);
  })

  describe('group Y', () => {
    beforeAll(() => console.log('Y: before all'))
    beforeEach(() => console.log('Y: before each'))
    test('Y: case 1', () => {
      console.log('Y: test case 1');
      expect(sum(1, 2)).toBe(3);
    })
    test('Y: case 2', () => {
      console.log('Y: test case 2');
      expect(sum(1, 2)).toBe(3);
    })
  })
})