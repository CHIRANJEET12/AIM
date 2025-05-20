#include <iostream>
#include <string>
#include <vector>
using namespace std;

void printpattern(int n){
    int t = 0;    
    for(int i=1;i<=n;i++){
        if(i%2==0){
            for(int j=n;j>=1;j--){
                cout<<j<<" ";
                t++;
            }
            cout<<endl;
        }else{
            for(int j=1;j<=n;j++){
                cout<<j<<" ";
                t++;
            }
            cout<<endl;
        }
    }
    cout<<"Total elements: "<<t;
}


int main(){

    int n;
    cin>>n;

    if(n>10){
        cout<<"Be responsible!";
    }

    printpattern(n);




    return 0;
}