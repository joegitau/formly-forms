import { FormlyFieldConfig } from "@ngx-formly/core";

export class User {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone?: string;
  address: string;
  postalCode: number;
  city: string;

  formFields() {
    return [
      {
        type: "input",
        key: "firstName",
        templateOptions: {
          label: "First Name",
          required: true,
          minLength: 3
        }
        // (alternative validation solution)
        // ,
        // validation: {
        //   messages: { minLength: "Requires a minimum of 3 characters." }
        // }
      },
      {
        type: "input",
        key: "lastName",
        templateOptions: {
          label: "Last Name",
          required: true,
          minLength: 3
        },
        expressionProperties: {
          "templateOptions.disabled": "!model.firstName"
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          type: "email",
          placeholder: "Email",
          label: "Email",
          required: true,
          email: true
        }
      },
      {
        key: "confirmEmail",
        type: "input",
        templateOptions: {
          type: "email",
          placeholder: "Verify email",
          label: "Confirm Email",
          required: true,
          email: true
        }
      },
      {
        key: "phone",
        type: "input",
        templateOptions: {
          type: "tel",
          placeholder: "Telephone",
          label: "Telephone",
          required: false
        }
      },
      {
        key: "jobTitle",
        type: "select",
        defaultValue: "Frontend Developer",
        templateOptions: {
          label: "Select Job Title",
          options: [
            { label: "Choose job title", value: "" },
            { label: "Frontend Developer", value: "frontend-developer" },
            { label: "Backend Developer", value: "backend-developer" },
            { label: "fullstack Developer", value: "fullstack-developer" }
          ]
        }
      },
      {
        key: "gender",
        type: "radio",
        templateOptions: {
          type: "radio",
          label: "Gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" }
          ]
        }
      },
      {
        key: "address",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "Address",
          label: "Address",
          required: true
        }
      },
      {
        key: "postalCode",
        type: "input",
        templateOptions: {
          type: "text",
          label: "Postal Code",
          required: true
        }
      },
      {
        key: "city",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "City",
          label: "City",
          required: true
        }
      }
    ] as FormlyFieldConfig[];
  }
}
