#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node* next;
    Node* prev;

    Node(int a) {
        val = a;
        next = NULL;
        prev = NULL;
    }
};

Node* createList(int data) {
    Node* head = NULL;
    Node* tail = NULL;

    for (int i = 0; i < data; i++) {
        int a;
        cin >> a;
        Node* newNode = new Node(a);

        if (head == NULL) {
            head = newNode;
            tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;  
            tail = newNode;
        }
    }

    return head;
}

void display(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->val << " ";
        temp = temp->next;
    }
    cout << endl;
}

void sorting(Node* head) {
    Node* temp = head;
    while(temp){
        Node* t1 = temp->next;
        while(t1){
            if(temp->val>t1->val){
                swap(t1->val,temp->val);
            }
            t1 = t1->next;
        }
        temp = temp->next;
    }
}

int main() {
    int n;
    cout << "Enter number of nodes: ";
    cin >> n;

    cout << "Enter the elements: ";
    Node* head = createList(n);

    cout << "Original list: ";
    display(head);

    sorting(head);

    cout << "Sorted list: ";
    display(head);

    return 0;
}
