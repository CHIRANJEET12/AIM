#include <iostream>
#include <string>
#include <vector>
using namespace std;

int countOverstocked(vector<vector<int>>& wrh, int r, int c){
    int c = 0;
    for(int i=0;i<r;i++){
        int m = 0;
        for(int j=0;j<c;j++){
            if(wrh[i][j]>=100){
                m++;
            }

            if(m>=3){
                c++;
            }
        }
    }
    return c;
}

int main(){

    int r;
    cout<<"Enter the number of warehouses";
    cin>>r;

    int c;
    cout<<"Enter the number of products-types";
    cin>>c;

    vector<vector<int>>wrh(r,vector<int>(c));

    cout<<"Number of overstocked warehouses: "<<countOverstocked(wrh,r,c);


    return 0;
}