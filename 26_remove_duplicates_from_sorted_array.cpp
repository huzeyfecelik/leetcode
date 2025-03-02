class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        std::vector<int> duplicates = {};
        for (int i = 0; i < nums.size(); i++) {
            if (duplicates.size() == 0 or nums[i] != duplicates[duplicates.size() - 1]) {
                duplicates.push_back(nums[i]);
            }
        }
        nums.clear();
        for (int i = 0; i < duplicates.size(); i++) {
            nums.push_back(duplicates[i]);
        }
        return duplicates.size();
    }
};