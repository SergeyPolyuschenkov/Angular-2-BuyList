import { Component, Input } from '@angular/core';

import { Item } from '../shared/Item';

@Component({
  moduleId: module.id,		
  selector: 'item-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
	@Input() toBuyList: Item[];
}