#include <iostream>
#include <vector>
using namespace std;

int segmentcount(string s){
    int c = 0;
    int n = s.length();
    int i = 0;
    while(i<n){
        if(s[i]=='1'){
            c++;
            while(i<n && s[i]=='1'){
                i++;
            }
        }else{
            i++;
        }
    }
    return c;
}

int mian(){

    string s;
    cin>>s;

    cout<<"Total segments:"<<segmentcount(s);



    return 0;
}