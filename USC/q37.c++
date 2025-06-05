#include <iostream>
#include <stack>
#include <vector>
#include <unordered_map>
using namespace std;

stack<int>st;
unordered_map<int,int>freq;

void PUSH(int n){
    st.push(n);
    freq[n]++;
    cout<<"pushed"<<st.top()<<endl;
}

void POP(){
    if(!st.empty()){
        int a = st.top();
        st.pop();
        freq[a]--;
        cout<<"poped"<<a<<endl;
    }
}

void COUNT(){
    if(st.empty()){ 
        cout<<"empty stack";
        return;
    }
    int a = st.top();
    cout<<"count of a occuring in the tower:"<<freq[a]<<endl;
}

int main(){

    int n;
    cout<<"Enter the number of tasks:";
    cin>>n;

    PUSH(5);   
    PUSH(3);   
    POP();     
    PUSH(4);   
    COUNT(); 





    return 0;
}