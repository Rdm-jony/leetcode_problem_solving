{
    function maxProfit(prices: number[]): number {
        let minimum_buy:number=prices[0]
        let maxProfit:number=0
        for (let i = 1; i < prices.length; i++) {
            if(minimum_buy>prices[i]) {
                minimum_buy=prices[i]
            }else{
                if(maxProfit<prices[i]-minimum_buy){
                    maxProfit=prices[i]-minimum_buy
                }
            }
        }
        return maxProfit

    };
    console.log(maxProfit([7, 1, 5, 3, 0, 2]))
}