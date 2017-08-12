import { Component, Output, EventEmitter } from '@angular/core';


@Component({
	moduleId: module.id,
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})
export class InputComponent {
	title: string = '';
	@Output() add = new EventEmitter();

	onSubmit() {
		if(this.title) {
			this.add.emit(this.title);
			this.title = '';
		}
		
	}
}