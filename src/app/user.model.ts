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
        className: "row",
        fieldGroup: [
          {
            className: "col-xs-4",
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
            className: "col-xs-12",
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
          }
        ]
      },
      {
        className: "row",
        fieldGroup: [
          {
            className: "col-md-6",
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
            className: "col-md-6",
            key: "confirmEmail",
            type: "input",
            templateOptions: {
              type: "email",
              placeholder: "Verify email",
              label: "Confirm Email",
              required: true,
              email: true
            }
          }
        ]
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
        className: "row",
        fieldGroup: [
          {
            className: "col-md-6",
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
        ]
      }
    ] as FormlyFieldConfig[];
  }
}
