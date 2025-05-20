#include <iostream>
#include <string>
#include <vector>
using namespace std;

pair<int, int> checkForGoodShots(vector<int>& arr, vector<int>& good, vector<int>& missed){
    int g = 0;
    int m = 0;
    for(int i : arr){
        if(i >= 7){
            g++;
            good.push_back(i);
        }else{
            m++;
            missed.push_back(i);
        }
    }
    return {g,m};
}

int main(){

    int n;
    cout<<"Enter the number of shots taken: ";
    cin>>n;
    cout<<"Enter there respective scores: ";
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    vector<int>good;
    vector<int>missed;

    pair<int, int> result =  checkForGoodShots(arr,good,missed);

    cout<<"Number of good shots: "<<result.first<<endl;
    cout<<"Number of missed shots: "<<result.second<<endl;

    cout<<"Good shots: ";
    for(int i : good){
        cout<<i<<" ";
    }
    cout<<endl;
    cout<<"Missed shots: ";
    for(int i : missed){
        cout<<i<<" ";
    }


    return 0;
}