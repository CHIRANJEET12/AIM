#include <iostream>
#include <stack>
#include <vector>
#include <climits>
using namespace std;

stack<pair<int,int>>st;

void PUSH(int n){
    int minn = st.empty() ? n : min(n,st.top().first);
    st.push({minn,n});
    cout<<"pushed:"<<st.top().first<<st.top().second<<endl;
}
void POP(){
    if(!st.empty()){
        int a = st.top().second;
        st.pop();
        cout<<"Pped out:"<<a<<endl;
    }
}

void MIN(){
    if(st.empty()){
        cout<<"Empty stack";
    }
    int a = st.top().first;
    cout<<"minimum element:"<<a<<endl;
}

int main(){

    int n;
    cout<<"No. of tasks:";
    cin>>n;

    PUSH(5);   
    PUSH(3);   
    POP();     
    PUSH(4);   
    MIN(); 




    return 0;
}