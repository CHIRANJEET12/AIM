#include <iostream>
#include <string>
#include <vector>
using namespace std;

void pattern(int n){
    int d = 1;
    int nd = n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==j){
                cout<<d++;
            }else if(i+j == n-1){
                cout<<nd--;
            }else{
                cout<<"_";
            }
        }
        cout<<endl;
    }
}


int main(){

    int n;
    cin>>n;

    pattern(n);



    return 0;
}