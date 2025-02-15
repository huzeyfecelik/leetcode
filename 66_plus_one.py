class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        counter = 1
        total = 0
        new_digits = []
        for n in range(len(digits) - 1, -1, -1):
            total += digits[n] * counter
            counter *= 10
        total += 1
        for n in range(len(str(total))):
            new_digits.append(int(str(total)[n]))
        return new_digits
