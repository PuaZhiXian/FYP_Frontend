import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProfileFormValues} from "../field-tester-template/template.component";

@Component({
  selector: 'email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor, OnDestroy, OnInit {

  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() regex?: RegExp;
  @Input() fieldRequired?: boolean = false;
  @Input() fieldTitle!: string;
  @Input() placeholder?: string = '';
  @Input() errorMessage?: string = '';
  @Input() submittedTry: boolean = false;


  form!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  get value(): ProfileFormValues {
    return this.form.value;
  }

  set value(value: ProfileFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  ngOnInit(): void {
    // create validator array
    let validatorArray = [Validators.email];
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
    // create the inner form
    this.form = this.formBuilder.group({
      text: [null, validatorArray],
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value['text']);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {
    console.log('in function onChange')
  };
  onTouched: any = () => {
    console.log('in function onTouched')
  };

  registerOnChange(fn: any) {
    console.log('in function registerOnChange')
    this.onChange = fn;
  }

  writeValue(value: any) {
    console.log('in function writeValue')
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn: any) {
    console.log('in function registerOnTouched')
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    if (this.form.valid) {
      console.log('in success validate')
      return null
    } else {
      console.log('in failed validate')
      console.log(this.submittedTry)
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
      return {text: {valid: false}};
    }
  }

}
