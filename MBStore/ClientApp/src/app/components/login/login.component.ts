import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    selector: 'mbs-login',
    templateUrl: './login.component.ts'
})

export class LoginComponent {

    loginForm: FormGroup;
    name: AbstractControl;
    password: AbstractControl;

    constructor(private fb: FormBuilder) {
        this.loginForm = fb.group({
            'name': ['', Validators.required],
            'password': ['', Validators.required]
        });

        this.name = this.loginForm.controls['name'];
        this.password = this.loginForm.controls['password'];
    }

    onSubmit(form: any): void {

    }

}