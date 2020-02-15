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
  userValues: string[];

  constructor() {
    this.userForm = new FormGroup({});
    this.userModel = new User();
    this.userFields = this.userModel.formFields();
  }

  saveUser() {
    const vals = Object.entries(this.userForm.value).map(([key, value]) => {
      return `${key}: ${value}`;
    });
    console.log(vals);
    this.userValues = vals;
    return vals;
  }

  ngOnInit() {}
}
