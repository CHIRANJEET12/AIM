#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> compare(string s, string a) {
    int n = s.length();
    int n1 = a.length();
    vector<int> ans;
    
    if (n1 == 0 || n < n1) {
        return ans;
    }

    int sum = 0;
    for (int i = 0; i < n1; i++) {
        sum += a[i];
    }

    for (int i = 0; i <= n - n1; i++) {
        int sum1 = 0;
        string w = "";
        
        for (int j = 0; j < n1; j++) {
            sum1 += s[i + j];
            w += s[i + j];
        }
        
        if (sum1 == sum) {
            if (w == a) {
                ans.push_back(i);  
            }
        }
    }
    return ans;
}

int main() {
    string text;
    getline(cin, text);  

    string pattern;
    getline(cin, pattern);  

    vector<int> result = compare(text, pattern);
    
    cout << "The array of indices: ";
    for (int idx : result) {
        cout << idx << " ";
    }
    cout << endl;

    return 0;

}