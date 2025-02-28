class Solution {
public:
    int maxArea(vector<int>& height) {
        int value = 0;
        int left = 0;
        int right = height.size() - 1;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] * (right - left) > value) {
                    value = height[left] * (right - left);
                }
                left += 1;
            } else if (height[left] > height[right]) {
                if (height[right] * (right - left) > value) {
                    value = height[right] * (right - left);
                }
                right -= 1;
            } else {
                if (height[left] * (right - left) > value) {
                    value = height[left] * (right - left);
                }
                left += 1;
            }
        }
        return value;
    }
};