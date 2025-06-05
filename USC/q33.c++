#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node{
public:
    int val;
    int pos;
    Node *next;
    Node(int a,int i)
    {
        val = a;
        pos = i;
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
        Node *newNode = new Node(a,i+1);
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

Node* rev(Node* head,int left ,int right){
    if(head==NULL || left==right) return head;

    vector<Node*> ans;
    Node* curr = head;
    while(curr!=NULL){
        ans.push_back(curr);
        curr = curr->next;
    }
    int l = left-1;
    int r = right-1;
    while(l<r){
        swap(ans[l]->val,ans[r]->val);
        l++;
        r--;
    }
    return head;
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
    Node* head = createList(n);
    // display(head);
    int l = 2;
    int r = 4;
    Node* head1 = rev(head,l,r);
    display(head1);

    return 0;
}