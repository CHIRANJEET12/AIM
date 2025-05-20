#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool checkForPrice(vector<int>& arr, int k){
    for(int i : arr){
        if(i == k){
            return true; 
        }
    }
    return false;
}

int main(){

    int n;
    cout<<"Enter the size: ";
    cin >> n;
    int k;
    cout<<"Enter the value: ";
    cin >> k;
    cout<<"Enter the elements of the array: ";
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    bool a = checkForPrice(arr,k);
    cout<<a;




    return 0;
}