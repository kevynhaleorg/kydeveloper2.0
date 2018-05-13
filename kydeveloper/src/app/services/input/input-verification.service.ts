import { Injectable } from '@angular/core';
import { InputComponent } from './../../components/input/input.component';

@Injectable()
export class InputVerificationService {

	constructor() {}

	public noValidation(input: InputComponent): void {
		input.error = false;
	}

	public required(input: InputComponent): void {
		if (input.fieldValue.length == 0)
		{
			input.errorMessage(["Field is required."]);
		}
		else if (!input.error) {
			input.success();
		}
	}

	public validatePostalCode(input: InputComponent): void {
		if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input.fieldValue))
		{
			input.success();
		}
		else {
			input.errorMessage(["Field requires a valid postal code."]);
		}
  }
  
  public validatePhoneNumber(input: InputComponent): void {
    if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(input.fieldValue))
    {
			input.success();
		}
		else {
			input.errorMessage(["Field requires a valid phone number."]);
		}
  }

	public validateEmail(input: InputComponent): void {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.fieldValue))  
		{  
			input.success();  
		}
		else {
			input.errorMessage(["Field requires a valid email."]);
		}
	}

	public validatePassword(input: InputComponent): void {

		const errors: Array<string> = [];

		if (input.fieldValue.length < 8) {
			errors.push("Password length must be longer than 8 characters.")
		}
		if (input.fieldValue.toLowerCase() == input.fieldValue) {
			errors.push("Password must contain a capital letter.")
		}
		if (!(new RegExp([0, 1, 2 , 3, 4, 5, 6, 7, 8 ,9].join("|")).test(input.fieldValue))) {
			errors.push("Password must contain a number.")
		}

		if (errors.length > 0) {
			input.errorMessage(errors);
		}
		else {
			input.success();
		}
	}

	public matchFields(input:InputComponent, matchInput:InputComponent): void {
		const errors: Array<string> = [];
		if (input.fieldValue != matchInput.fieldValue) {
			errors.push(`Value must match the value of the ${matchInput.placeholder} field.`)
		}

		if (errors.length > 0) {
			input.errorMessage(errors);
		}
		else {
			input.success();
		}
	}

	// Run tests on all Fields submitted, and submit true if all fields pass.
	public runAllTestsAndVerify(fields: Array<InputComponent>): Promise<boolean[]> {
		
		let cont: boolean = true;

		let promises: Array<Promise<boolean>> = [];

		fields.forEach(
			field => {
				field.runTests();
				if (field.error) {
					cont = false;
				}

				if (field.addedTests && field.successful)
				{
					field.addedTests.forEach(test => promises.push(test(field)));
				}		
			}
		);

		promises.push(Promise.resolve(cont));

		return Promise.all(promises);

	}

}
