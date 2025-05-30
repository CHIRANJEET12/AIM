#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* sortByActualValues(Node* head) {
    if (!head || !head->next) return head;

    Node* prev = head;
    Node* curr = head->next;

    while (curr) {
        if (curr->data < 0) {
            prev->next = curr->next;

            curr->next = head;
            head = curr;

            curr = prev->next;
        } else {
            prev = curr;
            curr = curr->next;
        }
    }
    return head;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

void insert(Node*& head, int val) {
    if (!head) {
        head = new Node(val);
        return;
    }
    Node* temp = head;
    while (temp->next) temp = temp->next;
    temp->next = new Node(val);
}

int main() {
    Node* head = nullptr;
    insert(head, 1);
    insert(head, -2);
    insert(head, -3);
    insert(head, 4);
    insert(head, -5);

    cout << "Original List: ";
    printList(head);

    head = sortByActualValues(head);

    cout << "Sorted by Actual Temperature: ";
    printList(head);

    return 0;
}
