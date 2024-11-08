import { strStr } from './index-first-occurence-string';

describe('index first occurence string', () => {
  it.each(
    [
      ['hello world! hello', 'hello', 0],
      ['sadbutsad', 'sad', 0],
      ['oye slt oye', 'slt', 4],
      ['wsh coucou wsh', 'coucou', 4],
      ['slt ma biche', 'nope', -1],
      ['', 'hello there', -1]
    ]
  )('should return the index of the first occurence in a string', (haystack, needle, expected) => {
    // Given

    // When
    const result = strStr(haystack, needle);

    // Then
    expect(result).toBe(expected);
  });
});