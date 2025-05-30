#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

string map[10] = {
    "","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"
};

void arrayFill(int i,vector<string>& ans,string& w,string& n){
    if(i==n.size()){
        ans.push_back(w);
        return; 
    }
    string s = map[n[i]-'0'];
    for(char c : s){
        w.push_back(c);
        arrayFill(i+1,ans,w,n);
        w.pop_back();
    }
}

void generateallStrings(string n){

    vector<string>ans;
    string w = "";
    if(n.empty()) return;

    arrayFill(0,ans,w,n);

   for(string& s : ans){
    cout<<s<<" ";
   } 
}

int main(){

    string n;
    cout<<"Enter numbers btw 2 to 9 (inclusive): ";
    cin>>n;

    generateallStrings(n);

    return 0;
}
