#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s){
    stack<char>st;
    for(char ch : s){
        if(ch=='(' || ch=='[' || ch=='{'){
            st.push(ch);
        }else{
            if(st.empty()) return false;

            char m = st.top();
            if((ch==')' && m!='(') || (ch==']' && m!='[') || (ch=='}' && m!='{')) return false;
            st.pop();
        }
    }
    return st.empty();
}

int main(){

    string input;
    cin>>input;

    if(isValid(input)){
        cout<<"True";
    }else{
        cout<<"False";
    }



    return 0;
}