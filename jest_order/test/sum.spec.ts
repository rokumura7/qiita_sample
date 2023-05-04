import { sum } from "@/sum"

describe('sum', () => {

  beforeAll(() => console.log('before all'))
  beforeEach(() => console.log('before each'))
  afterAll(() => console.log('after all'))
  afterEach(() => console.log('after each'))

  test('case 1', () => {
    console.log('test case 1');
    expect(sum(1, 2)).toBe(3);
  })

  test('case 2', () => {
    console.log('test case 2');
    expect(sum(1, 2)).toBe(3);
  })
})