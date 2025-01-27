class Solution:
    def maxArea(self, height: List[int]) -> int:
        value = 0
        left = 0
        right = len(height) - 1

        while left < right:
            if height[left] < height[right]:
                if height[left] * (right - left) > value:
                    value = height[left] * (right - left)
                left += 1
            elif height[left] > height[right]:
                if height[right] * (right - left) > value:
                    value = height[right] * (right - left)
                right -= 1
            else:
                if height[left] * (right - left) > value:
                    value = height[left] * (right - left)
                left += 1
                
        return value
