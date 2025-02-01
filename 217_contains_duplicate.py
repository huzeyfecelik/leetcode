class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for n in range(len(nums)):
            if n == len(nums) - 1:
                return False
            elif nums[n] == nums[n + 1]:
                return True