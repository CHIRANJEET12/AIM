#include <iostream>
#include <vector>
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

void split(Node* head, int n, int k, vector<vector<int>>& ans){
    int base = n/k;
    int extra = n%k;
    Node* curr = head;
    for(int i=0;i<k;i++){
        vector<int>parts;
        int l = base+(i<extra ? 1 : 0);
        for(int j=i; j<l && curr ;i++){
            parts.push_back(curr->val);
        }
        ans.push_back(parts);
    }
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
    int k;
    cin>>k;
    vector<vector<int>>ans;
    if(n==0){
        return {};
    }
    Node* head = createList(n);
    split(head,n,k,ans);
    display(head);

    for(int i=0;i<ans.size();i++){
        for(int j=0;j<ans.size();j++){
            cout<<ans[i][j];
        }
        cout<<endl;
    }


    return 0;
}
