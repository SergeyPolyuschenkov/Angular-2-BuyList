import { Component, Input } from '@angular/core';
import { BuyList } from './list.service';
import { Item } from '../shared/Item';

@Component({
  moduleId: module.id,
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})
export class ItemComponent {
	SelfBuyList = new BuyList();
	@Input() item: Item;

	toggle(item) {
		this.SelfBuyList.toggle(item);
	}

}