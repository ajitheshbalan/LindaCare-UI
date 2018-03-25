export class Order {
public userId: string;
public amountBuy: number;
public amountSell: number;
public currencyFrom: string;
public currencyTo: string;
public rate: number;
public timePlaced: string;
public originatingCountry: string;
public imagePath: string;

constructor(json: any) {
    if (json) {
    this.userId = json.userId;
    this.amountBuy = json.amountBuy;
    this.amountSell = json.amountSell;
    this.currencyFrom = json.currencyFrom;
    this.currencyTo = json.currencyTo;
    this.rate = json.rate;
    this.timePlaced = json.timePlaced;
    this.originatingCountry = json.originatingCountry;
    this.imagePath = 'http://flagpedia.net/data/flags/normal/' + this.originatingCountry.toLowerCase() + '.png';
    }
}
}
