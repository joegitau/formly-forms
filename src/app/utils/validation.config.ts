export const ValidationConfig = {
  requiredField(err, field) {
    return `${field.templateOptions.label} is required.`;
  },

  minRequiredLength(err, field) {
    return `${field.templateOptions.label} requires a minimum of ${field.templateOptions.minLength} characters.`;
  },

  maxRequiredLength(err, field) {
    return `${field.templateOptions.label}'s maximum character length is ${field.templateOptions.maxLength}.`;
  }
};
