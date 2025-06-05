#include <iostream>
#include <stack>
#include <vector>
#include <unordered_map>
using namespace std;


int main(){

    string s;
    cin>>s;

    string v = "";

    int bal = 0;
    int n = s.length();
    int a = 0;

    for(int i=0;i<n;i++){
        if(s[i]=='(') bal++;
        else bal--;

        if(bal == 0){
            for(int j=a+1;j<i;j++){
                v+=s[j];
            }
            a=i+1;
        }
    }
    cout<<v;



    return 0;
}