import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

import { User } from "../user.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  userModel: User;
  userOptions: FormlyFormOptions = {};
  userFields: FormlyFieldConfig[];

  constructor() {
    this.userForm = new FormGroup({});
    this.userModel = new User();
    this.userFields = this.userModel.formFields();
  }

  saveUser(user: User) {
    return user;
  }

  ngOnInit() {}
}
