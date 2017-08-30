import { Injectable } from '@angular/core';

@Injectable()
export class BuyList {
    private toBuyList = [
        {
            title: 'Молоко',
            complete: false
        },{
            title: 'Хлеб',
            complete: true
        },{
            title: 'Компот',
            complete: false
        }
    ];
    
    getCount() {
        return this.count;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    reset() {
        this.count = 0;
    }
}