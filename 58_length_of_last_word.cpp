class Solution {
public:
    int lengthOfLastWord(string s) {
        std::string memory = "";
        for (int n = 0; n < s.size(); n++) {
            if (s[n] != ' ') {
                if (n != 0 && s[n - 1] == ' ') {
                    memory = s[n];
                } else {
                    memory += s[n];
                }
            }
        }
        return memory.size();
    }
};