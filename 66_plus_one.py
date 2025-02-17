class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        number = ""
        new_digits = []
        for n in range(len(digits)):
            number += str(digits[n])
        new_number = str(int(number) + 1)
        for n in range(len(new_number)):
            new_digits.append(int(new_number[n]))
        return new_digits