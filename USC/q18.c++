#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> compare(string s, string a){
    vector<int> ans;
    int n = s.size();
    int n1 = a.size();
    if(n1>n) return ans;
    for (int i = 0; i <= n - n1; i++) {
        string w = s.substr(i,n1);    
        sort(w.begin(),w.end());
        if(w==a){
            ans.push_back(i);
        }
    }
    return ans;
}

int main(){

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