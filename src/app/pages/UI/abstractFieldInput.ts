import {Component} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProfileFormValues} from "./components/field-tester-template/template.component";

@Component({
  template: ''
})
export class AbstractNgModelComponent<T = any> implements ControlValueAccessor {

  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
  fieldRequired?: boolean = false;
  fieldTitle!: string;
  placeholder?: string = '';
  errorMessage?: string = '';
  submittedTry: boolean = false;
  isEmail: boolean = false;


  form!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(protected formBuilder: FormBuilder) {
  }

  get value(): ProfileFormValues {
    return this.form.value;
  }

  set value(value: ProfileFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.form.patchValue({formValue: value})
      console.log(this.form.value)
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    if (this.form.valid) {
      return null
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (this.submittedTry) {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({onlySelf: true});
          }
        } else {
          if (control.invalid && control.dirty) {
            control.markAsDirty();
            control.updateValueAndValidity({onlySelf: true});
          }
        }
      });
      return {formValue: {valid: false}};
    }
  }

  createFormGroup() {
    // create validator array
    let validatorArray = [];
    if (this.maxLength) {
      validatorArray.push(Validators.maxLength(this.maxLength))
    }
    if (this.minLength) {
      validatorArray.push(Validators.maxLength(this.minLength))
    }
    if (this.fieldRequired) {
      validatorArray.push(Validators.required)
    }
    if (this.regex) {
      validatorArray.push(Validators.pattern(this.regex))
    }
    if (this.isEmail) {
      validatorArray.push(Validators.email)
    }
    // create the inner form
    this.form = this.formBuilder.group({
      formValue: [null, validatorArray],
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value['formValue']);
        this.onTouched();
      })
    );
  }

}
