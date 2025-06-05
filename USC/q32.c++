#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node{
public:
    int val;
    Node *next;
    Node(int a)
    {
        val = a;
        next = NULL;
    }
};


Node *createList(int data)
{
    Node *head = NULL;
    Node *tail = NULL;

    for (int i = 0; i < data; i++)
    {
        int a;
        cin >> a;
        Node *newNode = new Node(a);
        if (head == NULL)
        {
            head = newNode;
            tail = newNode;
        }
        else
        {
            tail->next = newNode;
            tail = newNode;
        }
    }
    return head;
}

Node* sorted(Node* head, Node* head1){
    if(head==NULL) return head1;
    if(head1==NULL) return head;
    int c = 0;
    if(head->val<head1->val){
        head->next = sorted(head->next,head1);
        c = 1;
    }else{
        head1->next = sorted(head,head1->next);
    }
    return c==0 ? head1 : head;
}


void display(Node *head)
{
    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->val << " ";
        temp = temp->next;
    }
}


int main(){

    int n;
    cin>>n;
    int n1;
    cin>>n1;
    Node* head = createList(n);
    Node* head1 = createList(n1);
    display(head);
    display(head1);
    Node* head2 = sorted(head,head1);
    display(head2);
    

    return 0;
}