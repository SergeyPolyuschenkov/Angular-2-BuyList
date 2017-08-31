import { Component, Output, EventEmitter } from '@angular/core';
import { BuyList } from './list.service';

@Component({
	moduleId: module.id,
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})
export class InputComponent {
	SelfBuyList = new BuyList();
	title: string = '';
	@Output() add = new EventEmitter();

	onSubmit() {
		if(this.title) {
			let res = this.SelfBuyList.create(this.title);
			// this.add.emit(this.title);
			this.title = '';
		}
		
	}
}