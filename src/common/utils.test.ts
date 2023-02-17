import { isValueValid } from './utils';

describe('isValueValid', () => {
  const cases = [
    { value: '90', initialRate: 100, expected: true },
    { value: '95', initialRate: 100, expected: true },
    { value: '110', initialRate: 100, expected: true },
    { value: '111', initialRate: 100, expected: false },
    { value: '89', initialRate: 100, expected: false },
  ];

  test.each(cases)(
    'must return $expected when value is $value and initialRate is $initialRate)',
    ({ value, initialRate, expected }) => {
      expect(isValueValid(value, initialRate)).toBe(expected);
    }
  );
});
