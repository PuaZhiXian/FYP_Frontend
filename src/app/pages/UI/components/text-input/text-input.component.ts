import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractNgModelComponent} from "../../abstractFieldInput";


export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}

@Component({
  selector: 'text-input',
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
export class TextInputComponent extends AbstractNgModelComponent<string> implements ControlValueAccessor, OnDestroy, OnInit {

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
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
