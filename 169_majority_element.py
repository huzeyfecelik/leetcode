class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counter = 0
        greatest_amount= 0
        greatest_number = 0
        nums.sort()
        for i in range(len(nums)):
            if i == 0 and i == len(nums) - 1:
                greatest_amount = counter                
                greatest_number = nums[i]
            elif i == 0:
                counter += 1
            else:
                if nums[i] == (nums[i - 1]):
                    counter += 1
                    if counter > greatest_amount:
                        greatest_amount = counter
                        greatest_number = nums[i]
                else:
                    if counter > greatest_amount:
                        greatest_amount = counter
                        greatest_number = nums[i]
                    counter = 1
        return greatest_number