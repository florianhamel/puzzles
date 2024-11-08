import medium.lengthOfLongestSubstring
import kotlin.test.Test
import kotlin.test.assertEquals

class LengthOfLongestSubstringTest {

  @Test
  fun should_find_longest_substring_without_the_same_char() {
    // Given
    val ioMap = mapOf(Pair("abcabcbb", 3), Pair("bbbbb", 1), Pair("pwwkew", 3), Pair("aab", 2))
//    val ioMap = mapOf(Pair("aab", 2))

    // Then
    ioMap.entries.forEach { assertEquals(it.value, lengthOfLongestSubstring(it.key)) }
  }
}
