#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

vector<int> deckRevealedIncreasing(vector<int>& deck) {
    int n = deck.size();
    deque<int> dq;
    sort(deck.begin(), deck.end());

    for (int i = n - 1; i >= 0; i--) {
        if (!dq.empty()) {
            dq.push_front(dq.back());
            dq.pop_back();
        }
        dq.push_front(deck[i]);
    }

    return vector<int>(dq.begin(), dq.end());
}

int main() {
    vector<int> deck = {17, 13, 11, 2, 3, 5, 7};
    vector<int> result = deckRevealedIncreasing(deck);

    cout << "Initial deck order: ";
    for (int card : result) {
        cout << card << " ";
    }
    cout << endl;

    return 0;
}
