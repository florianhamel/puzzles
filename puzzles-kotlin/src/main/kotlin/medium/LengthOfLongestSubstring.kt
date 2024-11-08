package medium

fun lengthOfLongestSubstring(s: String): Int {
  var i = 0
  var j = 0
  var substring = ""
  var bestLen = 0
  while (i < s.length) {
    if (substring.contains(s[i])) {
      j += substring.indexOf(s[i]) + 1
    }
    substring = s.substring(j, i + 1)
    bestLen = if (substring.length > bestLen) substring.length else bestLen
    ++i
  }
  return bestLen
}
