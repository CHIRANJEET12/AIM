#include <iostream>
#include <string>
#include <vector>
using namespace std;

void examseating(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if((i+j)%2==0){
                cout<<"S ";
            }else{
                cout<<"NS ";
            }
        }
        cout<<endl;
    }
}

int main(){

    int n;
    cin>>n;

    examseating(n);




    return 0;
}