#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node{
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

Node* zigzag(Node* head) {
    if (!head || !head->next) {
        return head;
    }

    Node* first = head;
    Node* last = head;
    Node* prev = nullptr;

    while (last->next) {
        prev = last;
        last = last->next;
    }

    if (prev) {
        prev->next = nullptr; 
    }

    Node* remaining = first->next;
    first->next = last;
    last->next = zigzag(remaining);

    return head;
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
    head = zigzag(head);
    display(head);


    return 0;
}