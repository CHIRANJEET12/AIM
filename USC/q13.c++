#include <iostream>
#include <vector>
using namespace std;

int calMaxProfit(vector<int>& stkprice){
    int maxPro = 0;
    int minPro = stkprice[0];
    for(int i=1;i<stkprice.size();i++){
        int profit = stkprice[i]-minPro;
        if(profit>=2){
            maxPro = max(maxPro,profit);
        }
        minPro = min(minPro,stkprice[i]);
    }
    return maxPro;
}

int main(){

    int n;
    cin>>n;

    vector<int>stkprice(n);
    for(int i=0;i<n;i++){
        cin>>stkprice[i];
    }

    cout<<"Max profit: "<<calMaxProfit(stkprice);




    return 0;
}