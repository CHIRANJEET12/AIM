#include <iostream>
#include <string>
#include <vector>
#include <climits>
using namespace std;

int solve(vector<int>& ans,int target){
    int sum = 0;
    int minLength = INT_MAX;
    int n = ans.size();
    int s = 0;
    for(int e=0;e<n;e++){
        sum += ans[e];
        while(sum>=target){
            minLength = min(minLength,e-s+1);
            sum -= ans[s];
            s++;
        }
    }
    return minLength==INT_MAX? 0: minLength;
}

int main(){

    int n;
    cin>>n;

    vector<int>ans(n);
    for(int i=0;i<n;i++){
        cin>>ans[i];
    }

    int target;
    cin>>target;

    cout<<"min Length of subarray with sum >= target: "<<solve(ans,target);


    return 0;
}