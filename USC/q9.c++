#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
using namespace std;

bool emotionalbalanced(string s){
    unordered_map<char,int>mpp;

    for(int i=0;i<s.size();i++){
        mpp[s[i]]++;
    }
    int c = mpp.begin()->second;
    for(auto& i : mpp){
        if(i.second != c){
            return false;
        }
    }
    return true;
}

int main(){

    string s;
    cin>>s;

    if(emotionalbalanced(s)){
        cout<<"Ashriya smiles: Emotional balance found";
    }



    return 0;
}