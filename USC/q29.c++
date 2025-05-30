#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Node
{
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

Node* middlelist(Node* head, int n){
    Node* slow = head;
    Node* fast = head;
    while(fast && fast->next){
        slow = slow->next;
        fast = fast->next->next;
    }
    head = slow;
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

int main()
{

    int n;
    cin >> n;

    Node *head = createList(n);
    Node *head1 = middlelist(head, n);
    display(head1);

    return 0;
}