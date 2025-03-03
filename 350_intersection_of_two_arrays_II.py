class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        lesser = []
        greater = []
        solution = []
        if len(nums1) <= len(nums2):
            lesser = nums1
            greater = nums2
        else:
            lesser = nums2
            greater = nums1
        for i in range(len(lesser)):
            if lesser[i] in greater:
                solution.append(lesser[i])
                greater.remove(lesser[i])
        return solution

            


