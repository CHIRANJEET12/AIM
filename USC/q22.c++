#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node {
    public:
        int val;
        int pos;
        Node* next;
        Node(int a,int b){
            val = a;
            pos = b;
            next = NULL;
        }
};

Node* createList(int data,int pos){
    Node* head = NULL;
    Node* tail = NULL;
    Node* c = NULL;

    for(int i=0;i<data;i++){
        int a;
        cin>>a;
        Node* newNode = new Node(a,i);
        if(head==NULL){
            head = newNode;
            tail = newNode;
        }else{
            tail->next = newNode;
            tail = newNode;
        }

        if(i==pos-1){
            c = newNode;
        }
    }
    if(pos>0 && c){
        tail->next = c;
    }
    return head;
}

bool deleteCycle(Node* head){
    Node* first = head;
    Node* last = head;
    int c = 0;
    while(first && first->next){
        last = last->next;
        first = first->next->next;
        if(last==first) {
            c=1;
            cout<<"Cycle detected";
            break;
        }
    }

    if(c==1){
        cout<<"Cycle removed";
        first->next = NULL;
        return false;
    }else if( c==0){
        return true;
    }
    return false;
}


void display(Node* head){
    Node* temp = head;
    int c = 0;
    while(temp!=NULL && c<12){
        cout<<temp->val<<","<<temp->pos<<"   ";
        temp = temp->next;
        c++;
    }
    cout<<endl;
}

int main(){

    int n;
    cin>>n;

    int pos;
    cin>>pos;

    Node* head = createList(n,pos);
    display(head);

    deleteCycle(head);
    display(head);
    
    
    // head = zigzag(head);


    return 0;
}