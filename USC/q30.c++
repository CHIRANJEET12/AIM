#include <iostream>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int x) : val(x), next(NULL) {}
};

Node* addTwoNumbers(Node* l1, Node* l2) {
    Node* dummyHead = new Node(0);
    Node* current = dummyHead;
    int carry = 0;

    while (l1 || l2 || carry) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;

        int sum = val1 + val2 + carry;
        carry = sum / 10;

        current->next = new Node(sum % 10);
        current = current->next;

        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }

    return dummyHead->next;
}


// Function to create a linked list from an array
Node* createList(int arr[], int n) {
    Node* head = new Node(arr[0]);
    Node* current = head;
    for (int i = 1; i < n; ++i) {
        current->next = new Node(arr[i]);
        current = current->next;
    }
    return head;
}

// Function to print the linked list
void printList(Node* head) {
    while (head != NULL) {
        cout << head->val;
        if (head->next) cout << " -> ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    int arr1[] = {2, 4, 3}; // Represents 342
    int arr2[] = {5, 6, 4}; // Represents 465

    Node* l1 = createList(arr1, 3);
    Node* l2 = createList(arr2, 3);

    Node* result = addTwoNumbers(l1, l2);

    printList(result); // Output: 7 -> 0 -> 8 (342 + 465 = 807)

    return 0;
}
