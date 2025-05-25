#include <iostream>
#include <string>
#include <vector>
#include <set>
#include <unordered_map>
using namespace std;

int counter(string jewel, string stone){
    unordered_map<char,int>m;

    for(int i=0;i<jewel.size();i++){
        m[jewel[i]]++;
    }
    int c= 0;
    for(int i=0;i<stone.size();i++){
        if(m.find(stone[i])!=m.end()){
            c++;
        }
    }
    return c;
}

int main(){

    string jewel;
    cin>>jewel;

    string stone;
    cin>>stone;

    cout<<counter(jewel,stone);


    return 0;
}