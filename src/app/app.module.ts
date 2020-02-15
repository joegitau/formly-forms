import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { ValidationConfig } from "./utils/validation.config";

// function requiredField(err, field) {
//     return `${field.templateOptions.label} is required.`;
//   }

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: "required", message: ValidationConfig.requiredField },
        { name: "minLength", message: ValidationConfig.minRequiredLength },
        { name: "maxLength", message: ValidationConfig.maxRequiredLength }
      ]
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
