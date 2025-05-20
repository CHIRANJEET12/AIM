#include <iostream>
#include <string>
#include <vector>
using namespace std;

int checkMagicalscore(vector<int>& ans){
    int c = 0;
    for(int i=1;i<ans.size()-2;i++){
        if(ans[i]>ans[i-1] && ans[i]>ans[i+1]){
            c++;
        }
    }
    return c;
}


int main(){

    int n;
    cout<<"Enter number of days: ";
    cin>>n;
    vector<int>ans(n);
    cout<<"enter scores of each day: ";
    for(int i=0;i<n;i++){
        cin>>ans[i];
    }

    int count = checkMagicalscore(ans);

    cout<<"Total number of Magical Scores: "<<count;

    return 0;
}