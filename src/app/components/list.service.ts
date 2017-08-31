import { Input } from '@angular/core';
import { Item } from '../shared/Item';
import { Injectable } from '@angular/core';
import { toBuyList } from '../shared/data';

@Injectable()
export class BuyList {
    @Input() toBuyList: Item[];
    
    getItems(): Item[] {
      return toBuyList;
    }

    toggle(item) {
      let index = toBuyList.indexOf(item);
      toBuyList[index].complete = !toBuyList[index].complete;
    }

    create(title: string) {
      const item = new Item(title);
      toBuyList.push(item);
    }
    
}