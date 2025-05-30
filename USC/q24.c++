#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

void sortList(Node* head) {
    int count[3] = {0, 0, 0};

    Node* temp = head;
    while (temp) {
        count[temp->data]++;
        temp = temp->next;
    }

    temp = head;
    for (int i = 0; i < 3; i++) {
        while (count[i]--) {
            temp->data = i;
            temp = temp->next;
        }
    }
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
    insert(head, 2);
    insert(head, 0);
    insert(head, 1);
    insert(head, 2);
    insert(head, 0);

    cout << "Original List: ";
    printList(head);

    sortList(head);

    cout << "Sorted List: ";
    printList(head);

    return 0;
}
