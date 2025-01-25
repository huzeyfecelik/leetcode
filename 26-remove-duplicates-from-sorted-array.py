class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        duplicates = []
        for i in range(len(nums)):
            if len(duplicates) == 0 or nums[i] != duplicates[len(duplicates) - 1]:
                duplicates.append(nums[i])
        nums.clear()
        for i in range(len(duplicates)):
            nums.append(duplicates[i])
        return len(duplicates)
        