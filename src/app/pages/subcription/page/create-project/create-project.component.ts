import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";
import {ISelectingApiCollection} from "../../../../interface/api-collection/i-selecting-api-collection";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  apiCollection: ISelectingApiCollection[] = [];

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private message: NzMessageService,
              private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initApiCollection();
  }

  initApiCollection() {
    this.apiCollection = [
      {
        category: "Product A",
        collections: [
          {
            "id": "01",
            "name": "WeatherNow API",
            "description": "Provides real-time weather data for a given location."
          },
          {
            "id": "02",
            "name": "CryptoExchange API",
            "description": "Retrieves cryptocurrency market prices and trading data."
          },
          {
            "id": "03",
            "name": "TranslationAPI",
            "description": "Enables language translation services for text and documents."
          }
        ]
      },
      {
        category: "Product B",
        collections: [
          {
            "id": "04",
            "name": "SocialMediaAnalytics API",
            "description": "Tracks and analyzes social media activity and engagement."
          },
          {
            "id": "05",
            "name": "PaymentGatewayAPI",
            "description": "Integrates various payment gateways for secure transactions."
          }
        ]
      }, {
        category: "Product C",
        collections: [
          {
            "id": "06",
            "name": "ImageRecognitionAPI",
            "description": "Analyzes and classifies images based on their content."
          },
          {
            "id": "07",
            "name": "EmailVerificationAPI",
            "description": "Verifies email addresses for validity and deliverability."
          },
          {
            "id": "08",
            "name": "GeolocationAPI",
            "description": "Retrieves geolocation data based on IP addresses or addresses."
          },
          {
            "id": "09",
            "name": "NewsFeedAPI",
            "description": "Retrieves real-time and curated news articles and headlines."
          },
          {
            "id": "10",
            "name": "LanguageProcessingAPI",
            "description": "Performs natural language processing tasks on text data."
          }
        ]
      }

    ]
  }

  initForm() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      apiCollection: [null, [Validators.required]]
    });
  }

  submit() {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      this.message.success('Project have successfully created');
      this.projectService.addProject(this.validateForm.value)
        .pipe(finalize(() => {
          // this.router.navigate(['/', 'dashboard'])
        }))
        .subscribe((resp) => {

        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
      console.log('not value')
    }
  }

  updateSelectedApiCollection(selectedId: any) {
    this.validateForm.patchValue({
      apiCollection: selectedId
    })
  }
}
