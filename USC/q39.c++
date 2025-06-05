#include <iostream>
#include <stack>
#include <vector>
using namespace std;

void nextsmallerelement(vector<int>& nge, vector<int>& ans, vector<int>& ngeIndex) {
    int n = nge.size();
    vector<int> result(n, -1);

    for(int i = 0; i < n; i++) {
        int j = ngeIndex[i]; 
        if(j == -1) {
            result[i] = -1;
            continue;
        }

        for(int k = j + 1; k < n; k++) {
            if(ans[k] < ans[j]) {
                result[i] = ans[k];
                break;
            }
        }
    }

    for(int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }
    cout << endl;
}

void nextgreaterelement(vector<int>& ans) {
    int n = ans.size();
    stack<int> s;
    vector<int> nge(n, -1);
    vector<int> ngeIndex(n, -1); 

    for(int i = n - 1; i >= 0; i--) {
        while(!s.empty() && ans[s.top()] <= ans[i]) {
            s.pop();
        }
        if(!s.empty()) {
            nge[i] = ans[s.top()];
            ngeIndex[i] = s.top(); 
        }
        s.push(i);
    }

    cout << "NGE of ans:" << endl;
    for(int i = 0; i < n; i++) {
        cout << nge[i] << " ";
    }
    cout << endl;

    nextsmallerelement(nge, ans, ngeIndex);
}

int main() {
    int n;
    cin >> n;

    vector<int> ans(n);
    for(int i = 0; i < n; i++) {
        cin >> ans[i];
    }

    nextgreaterelement(ans);

    return 0;
}
