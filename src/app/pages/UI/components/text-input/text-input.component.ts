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


export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor, OnDestroy, OnInit {

  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() regex?: RegExp;
  @Input() fieldRequired?: boolean = false;
  @Input() fieldTitle!: string
  @Input() placeholder?: string = '';
  @Input() errorMessage?: string = '';


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
  };
  onTouched: any = () => {
  };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
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
        if (control.invalid && control.touched) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
      return {text: {valid: false}};
    }
  }

}
