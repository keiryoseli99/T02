import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formLogin: FormGroup;
  public validationMessages: object;

  constructor(
    private fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.validationMessages = {
      'username': [
        {type: 'required', message: "Debe capturar el nombre del usario"}
      ],
      'password': [
        {type: 'required', message: "Debe capturar el nombre del password"}
      ]
    }
  }
}
