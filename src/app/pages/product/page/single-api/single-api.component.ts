import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-api',
  templateUrl: './single-api.component.html',
  styleUrls: ['./single-api.component.scss']
})
export class SingleApiComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  apiCollectionId !: string | null;

  apiCollectionAccess: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.apiCollectionId = params.get('apiCollectionId');
    });
  }

}
