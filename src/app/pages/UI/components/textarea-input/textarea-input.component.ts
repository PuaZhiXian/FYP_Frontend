import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractNgModelComponent} from "../../abstractFieldInput";
import {ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextareaInputComponent),
      multi: true
    }
  ]
})
export class TextareaInputComponent extends AbstractNgModelComponent<string> implements ControlValueAccessor, OnDestroy, OnInit {

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
