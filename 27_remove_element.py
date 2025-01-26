class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        left = 0
        right = len(nums) - 1
        counter = 0
        while left <= right:
            if nums[left] == val:
                swapped = nums[right]
                nums[right] = nums[left]
                nums[left] = swapped
                right -= 1
                counter += 1
            else:
                left += 1
        return len(nums[:len(nums) - counter])