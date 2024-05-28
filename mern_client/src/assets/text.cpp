#include <iostream>
#include <string>
#include <unordered_set>

std::string lastOperationResult(const std::string& s) {
    std::unordered_set<char> seen;

    for (char c : s) {
        seen.insert(c);
    }

    std::string result;
    for (char c : s) {
        seen.erase(c);
        if (seen.empty()) {
            break;
        }
        result.push_back(c);
    }

    return result;
}

int main() {
    // Example usage:
    std::string input1 = "aabcbbca";
    std::cout << "Output 1: " << lastOperationResult(input1) << std::endl;  // Output: "ba"

    std::string input2 = "abcd";
    std::cout << "Output 2: " << lastOperationResult(input2) << std::endl;  // Output: "abcd"

    return 0;
}
