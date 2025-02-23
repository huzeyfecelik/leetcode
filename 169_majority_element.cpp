class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int counter = 0;
        int greatest_amount = 0;
        int greatest_number = 0;
        std::ranges::sort(nums);
        for (int i = 0; i < nums.size(); i++) {
            if (i == 0 && i == nums.size() - 1) {
                greatest_amount = counter;               
                greatest_number = nums[i];
            } else if (i == 0) {
                counter += 1;
            } else {
                if (nums[i] == (nums[i - 1])) {
                    counter += 1;
                    if (counter > greatest_amount) {
                        greatest_amount = counter;
                        greatest_number = nums[i];
                    }
                } else {
                    if (counter > greatest_amount) {
                        greatest_amount = counter;
                        greatest_number = nums[i];
                    }
                    counter = 1;
                }
            }
        }
        return greatest_number;
    }
};