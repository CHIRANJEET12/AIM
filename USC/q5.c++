#include <iostream>
#include <string>
#include <vector>
using namespace std;

int longestStreak(vector<int>& ans){
    int c = 0;
    int maxx = 0;
    for(int i=1;i<ans.size();i++){
        if(ans[i]>ans[i-1]){
            c++;
        }else{
            c = 0;
        }
        maxx = max(maxx,c);
    }

    return maxx;
}


int main(){

    int n;
    cout<<"Enter the number of days: ";
    cin>>n;

    vector<int> ans(n);
    cout<<"Enter the temprature reading on each day: ";
    for(int i=0;i<n;i++){
        cin>>ans[i];
    }

    cout<<"Longest streak of days: "<<longestStreak(ans);



    return 0;
}