class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int left = 0;
        int right = nums.size() - 1;
        int counter = 0;
        int swapped = 0;
        while (left <= right) {
            if (nums[left] == val) {
                swapped = nums[right];
                nums[right] = nums[left];
                nums[left] = swapped;
                right -= 1;
                counter += 1;
            } else {
                left += 1;
            }
        }
        std::vector<int> sliced(nums.begin(), nums.begin() + (nums.size() - counter));
        return sliced.size();
    }
};