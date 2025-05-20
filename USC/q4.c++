#include <iostream>
#include <string>
#include <vector>
using namespace std;

int criticalJamHours(vector<int>& ans){
    int c = 0;
    for(int i=1;i<ans.size()-1;i++){
        if(ans[i]>=50 && ans[i]>ans[i-1]){
            c++;
        }
    }
    return c;
}

int main(){

    int n;
    cout<<"Enter number of hours: ";
    cin>>n;
    cout<<"Enter the number of vehicles passing in each hour: ";
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    int count = criticalJamHours(arr);

    cout<<"Total number of Critical Jam Hours: "<<count;

    



    return 0;
}