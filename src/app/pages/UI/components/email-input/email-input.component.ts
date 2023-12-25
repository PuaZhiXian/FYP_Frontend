import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractNgModelComponent} from "../../abstractFieldInput";

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
export class EmailInputComponent extends AbstractNgModelComponent<string> implements ControlValueAccessor, OnDestroy, OnInit {

  @Input() override minLength?: number;
  @Input() override maxLength?: number;
  @Input() override regex?: string;
  @Input() override fieldRequired?: boolean = false;
  @Input() override fieldTitle!: string;
  @Input() override placeholder?: string = '';
  @Input() override errorMessage?: string = '';
  @Input() override submittedTry: boolean = false;

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
    this.isEmail = true;
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
