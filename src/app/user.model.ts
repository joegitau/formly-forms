import { FormlyFieldConfig } from "@ngx-formly/core";

export class User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: number;
  city: string;

  formFields() {
    return [
      {
        key: "firstName",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "First name",
          label: "First Name",
          required: true
        },
        validation: {
          messages: { required: "First Name is required." }
        }
      },
      {
        key: "lastName",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "Last name",
          label: "Last Name",
          required: true
        },
        validation: {
          messages: { required: "Last name is required." }
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          type: "email",
          placeholder: "Email",
          label: "Email",
          required: true
        },
        validation: {
          messages: { required: "Email is required." }
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
        key: "address",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "Address",
          label: "Address",
          required: true
        },
        validation: { messages: { required: "Address is required." } }
      },
      {
        key: "postalCode",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "Postal Code",
          label: "Postal Code",
          required: true
        },
        validation: { messages: { required: "Address is required." } }
      },
      {
        key: "city",
        type: "input",
        templateOptions: {
          type: "text",
          placeholder: "City",
          label: "City",
          required: true
        },
        validation: { messages: { required: "City is required." } }
      }
    ] as FormlyFieldConfig[];
  }
}
