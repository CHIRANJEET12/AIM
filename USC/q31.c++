// #include <iostream>

// struct Node {
//     int val;
//     Node* prev;
//     Node* next;
//     Node(int x) : val(x), prev(nullptr), next(nullptr) {}
// };

// Node* removeTargetNodes(Node* head, int target) {
//     Node* current = head;
    
//     while (current != nullptr) {
//         if (current->val == target) {
//             if (current == head) {
//                 head = current->next;
//                 if (head != nullptr) {
//                     head->prev = nullptr;
//                 }
//             } else {
//                 if (current->prev != nullptr) {
//                     current->prev->next = current->next;
//                 }
//                 if (current->next != nullptr) {
//                     current->next->prev = current->prev;
//                 }
//             }
//             Node* toDelete = current;
//             current = current->next;
//             delete toDelete; 
//         } else {
//             current = current->next;
//         }
//     }
    
//     return head;
// }

// void printList(Node* head) {
//     Node* current = head;
//     while (current != nullptr) {
//         std::cout << current->val;
//         if (current->next != nullptr) {
//             std::cout << " <-> ";
//         }
//         current = current->next;
//     }
//     std::cout << std::endl;
// }

// Node* createList(vector<int> values) {Z
//     if (values.empty()) return nullptr;
    
//     Node* head = new Node(values[0]);
//     Node* prev = head;
    
//     for (size_t i = 1; i < values.size(); ++i) {
//         Node* newNode = new Node(values[i]);
//         prev->next = newNode;
//         newNode->prev = prev;
//         prev = newNode;
//     }
    
//     return head;
// }

// int main() {
//     // Test Case 1
//     Node* list1 = createList({1, 2, 3, 2, 4});
//     std::cout << "Original list 1: ";
//     printList(list1);
//     list1 = removeTargetNodes(list1, 2);
//     std::cout << "After removing 2: ";
//     printList(list1);
    
    
//     return 0;
// }