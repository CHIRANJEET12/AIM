#include <iostream>
#include <string>
#include <vector>
#include <climits>
using namespace std;

void solve(string& speech){
    int n = speech.size();

    string w = "";
    string s = "";
    for(int i=n-1;i>=0;i--){
        if(speech[i]!=' '){
            w = speech[i]+w;
        }else{
            if(!w.empty()){
                if(!s.empty()){
                    s+=' ';
                }
                s+=w;
                w="";
            }
        }
    }
    cout<<s;
}


int main(){

    string speech;
    getline(cin,speech);

    solve(speech);


    return 0;
}