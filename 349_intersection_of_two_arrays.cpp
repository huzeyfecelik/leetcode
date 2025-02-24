class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        std::vector<int> lesser = {};
        std::vector<int> greater = {};
        std::vector<int> solution = {};
        if (nums1.size() <= nums2.size()) {
            lesser = nums1;
            greater = nums2;
        } else {
            lesser = nums2;
            greater = nums1;
        }
        for (int i = 0; i < lesser.size(); i++) {
            if (not std::ranges::contains(solution, lesser[i])) {
                if (std::ranges::contains(greater, lesser[i])) {
                    solution.push_back(lesser[i]);
                }
            }
        }
        return solution;
    }
};