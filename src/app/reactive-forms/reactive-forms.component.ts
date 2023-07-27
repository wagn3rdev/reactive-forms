import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private formBuilder: FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
  });
}
