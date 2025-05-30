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

Node *doublelist(Node *head, int n){
    Node *newNode = new Node(0);
    if (n == 1)
    {
        if (head->val * 2 > 9)
        {
            Node *newNode = new Node(1);
            newNode->next = head;
            head->val = (head->val * 2) % 10;
            head = newNode;
        }
        return head;
    }
    else
    {
        if (head->val * 2 > 9)
        {
            newNode->val = 1;
            newNode->next = head;
            head = newNode;
        }
    }
    Node *curr = head->next;
    Node *prev = head;
    int c = 0;
    while (curr){
        if (curr->val * 2 > 9){
            if(c!=0){
                prev->val = prev->val + 1;
            }
            c++;
        }
        curr->val = (curr->val * 2) % 10;
        prev = curr;
        curr = curr->next;
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

int main()
{

    int n;
    cin >> n;

    Node *head = createList(n);
    Node *head1 = doublelist(head, n);
    display(head1);

    return 0;
}