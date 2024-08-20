import { FormControl, ValidationErrors } from '@angular/forms';

const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]+([ a-zA-Z0-9_,;]+)*$/;
const ALPHA_NUMERIC_REGEXHipen = /^[a-zA-Z0-9_-]+([a-zA-Z0-9_-]+)*$/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }

function alphaNumericValidator(control: FormControl): ValidationErrors | null {
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}
function alphaNumericValidatorHipen(control: FormControl): ValidationErrors | null {
    return ALPHA_NUMERIC_REGEXHipen.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}
export {
    alphaNumericValidator,
    alphaNumericValidatorHipen
};