import { Component } from '@angular/core';
import { BuyList } from './components/list.service';
import { Item } from './shared/Item';
import { toBuyList } from './shared/data';

@Component({
	moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
	SelfBuyList = new BuyList();
	title: string = 'Angular2 BuyList';
	toBuyList: Item[] = this.SelfBuyList.getItems();
  	
}