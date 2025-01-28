class Solution:
    def romanToInt(self, s: str) -> int:
        memory = ""
        trying = ""
        final = 0

        pairs = {
            "I": 1,
            "II": 2,
            "III": 3,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }

        for n in range(len(s) - 1, -1, -1):
            trying = s[n] + trying
            if trying in pairs:
                memory = trying
                if n == 0:
                    final += pairs.get(memory)
            else:
                final += pairs.get(memory)
                trying = s[n]
                memory = trying
                if n == 0:
                    final += pairs.get(memory)
        return final