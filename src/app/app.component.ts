import { Component } from '@angular/core';

import { Item } from './shared/Item';
import { toBuyList } from './shared/data';

@Component({
	moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
	title: string = 'Angular2 BuyList';
	toBuyList: Item[] = toBuyList;
  	
  	create(title: string) {
  		const item = new Item(title);
  		this.toBuyList.push(item);
  	}
}