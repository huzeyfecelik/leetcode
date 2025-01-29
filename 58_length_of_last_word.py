class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        memory = ""
        for n in range(len(s)):
            if s[n] != " ":
                if s[n - 1] == " ":
                    memory = s[n]
                else:
                    memory += s[n]
        return len(memory)
