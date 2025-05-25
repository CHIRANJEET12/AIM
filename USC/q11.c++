#include <iostream>
#include <string>
#include <vector>
#include <set>
#include <cctype>  
using namespace std;

bool checkVowelinitial(const string& temp){
    if (temp.empty()) return false;
    char c = tolower(temp[0]);  
    return c=='a' || c=='e' || c=='i' || c=='o' || c=='u';
}

int main(){
    int n;
    cin >> n;

    vector<string> names(n);
    for(int i = 0; i < n; i++){
        cin >> names[i];
    }

    set<string> st;
    int c= 0;
    vector<string>ans;
    for(int i=0;i<n;i++){
        if(checkVowelinitial(names[i]) && st.find(names[i])==st.end()){
            c++;
            ans.push_back(names[i]);
            st.insert(names[i]);
        }
    }

    cout << c << " ";
    for(int i = 0; i < ans.size(); i++){
        cout << ans[i] << " ";
    }

    return 0;
}
