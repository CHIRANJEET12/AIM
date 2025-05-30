#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool isPower(int n){
    return n>0 && (n & (n-1))==0;
}

int main(){

    int n;
    cin>>n;
    vector<int>ans(n);
    for(int i=0;i<n;i++){
        cin>>ans[i];
    }
    int c =0;

    for(int i=0;i<n;i++){
        if(isPower(ans[i])){
            c++;
        }
    }

    cout<<c;


    return 0;
}