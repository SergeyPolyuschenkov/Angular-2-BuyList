import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../shared/Item';
import { toBuyList } from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})
export class ItemComponent {
	@Input() item: Item;
	@Output() delete = new EventEmitter();

	toggle() {
		this.item.complete = !this.item.complete;
	}

}