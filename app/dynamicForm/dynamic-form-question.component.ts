import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase }     from './question-base';

@Component({
	 moduleId: module.id,
	selector:'df-question',
	//templateUrl:'app/dynamicForm/dynamic-form-question.component.html'
	templateUrl:'dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent{
	@Input() question:QuestionBase<any>;
	@Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
    
}