#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node {
    public:
        int val;
        Node* next;
        Node(int a){
            val = a;
            next = NULL;
        } 
};

Node* createList(int data){
    Node* head = NULL;
    Node* tail = NULL;

    for(int i=0;i<data;i++){
        int a;
        cin>>a;
        Node* newNode = new Node(a);
        if(head==NULL){
            head = newNode;
            tail = newNode;
        }else{
            tail->next = newNode;
            tail = newNode;
        }
    }
    return head;
}

void uniqueList(Node* head){
    Node* temp = head;
    Node* prev = NULL;
    while(temp->next!=NULL){
        if(temp->val == temp->next->val){
            prev = temp->next;
            temp->next = temp->next->next;
            delete prev;
        }else{
            temp = temp->next;
        }
    }
}

void display(Node* head){
    Node* temp = head;
    while(temp!=NULL){
        cout<<temp->val<<" ";
        temp = temp->next;
    }
}

int main(){

    int n;
    cin>>n;
    Node* head = createList(n);

    uniqueList(head);
    display(head);


    return 0;
}