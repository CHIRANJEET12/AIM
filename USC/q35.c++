#include <iostream>
#include <stack>
#include <vector>
using namespace std;

int postfix(vector<string>& ans){
    stack<string>s;
    for(int i=0;i<ans.size();i++){
        if(ans[i] != "+" && ans[i] != "-" && ans[i] != "/" && ans[i] != "*"){
            s.push(ans[i]);
        }else{
            int a = stoi(s.top());
            s.pop();
            int b = stoi(s.top());
            s.pop();
            int c;
            if(ans[i] == "+") c = b + a;
            else if(ans[i] == "-") c = b - a;
            else if(ans[i] == "*") c = b * a;
            s.push(to_string(c));
        }
    }
    return stoi(s.top());
}

int main(){

    int n;
    cin>>n;

    vector<string>ans(n);
    for(int i=0;i<n;i++){
        cin>>ans[i];
    }

    cout<<"result:"<<postfix(ans);



    return 0;
}