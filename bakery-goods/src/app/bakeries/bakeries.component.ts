import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bakeries',
  templateUrl: './bakeries.component.html',
  styleUrls: ['./bakeries.component.css'],
})
export class BakeriesComponent {
  searchForm: any;
  bakeries = [
    { name: 'cake house' },
    { name: 'croissant town' },
    { name: 'cupcake' },
    { name: 'biscuit factory' },
    { name: 'gateaux' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }
}
