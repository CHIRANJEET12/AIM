#include <iostream>
#include <stack>
#include <queue>
#include <vector>
using namespace std;

void findTime(int arr[], int n, int k, int& time){
    // if(n==0) return;

    // while(arr[k]>0){
    //     for(int i=0;i<n;i++){
    //         if(arr[i]>0){
    //             arr[i] = arr[i]-1;
    //             seconds++;
    //         }
    //     }
    // }

    queue<int>q;
    for(int i=0;i<n;i++){
        q.push(i);
    }

    while(!q.empty()){
        int c = q.front();
        q.pop();
        arr[c]--;
        time++;

        if(c==k && arr[k]==0){
            return;
        }
        
        if(arr[c]>0){
            q.push(c);
        }
    }
}

int main(){

    int arr[] = {2,3,2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int seconds = 0;
    int k = 2;
    findTime(arr, n, k, seconds);
    cout << "seconds:" << seconds << endl;



    return 0;
}