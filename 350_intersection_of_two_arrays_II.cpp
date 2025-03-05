class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
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
            if (std::ranges::contains(greater, lesser[i])) {
                solution.push_back(lesser[i]);
                auto remove = std::find(greater.begin(), greater.end(), lesser[i]);
                greater.erase(remove);
            }
        }
        return solution;
    }
};