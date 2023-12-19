import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractNgModelComponent} from "../../abstractFieldInput";
import {ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'range-date-input',
  templateUrl: './range-date-inputv2.component.html',
  styleUrls: ['./range-date-inputv2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeDateInputv2Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RangeDateInputv2Component),
      multi: true
    }
  ]
})
export class RangeDateInputv2Component extends AbstractNgModelComponent<string> implements ControlValueAccessor, OnDestroy, OnInit {

  @Input() override minLength?: number;
  @Input() override maxLength?: number;
  @Input() override regex?: RegExp;
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

