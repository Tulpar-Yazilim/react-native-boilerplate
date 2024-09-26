import {t} from 'i18next';

import {Nullable} from '@/utils';

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const strongPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
export const mediumPasswordRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})');
export const weakPasswordRegex = new RegExp('^(?=.{6,})');

export const checkString = (value: Nullable<string> | undefined, require = false, min = 0, max = 0): string | boolean => {
  if (require && !value) {
    return t('validation.requiredError').toString();
  }

  if (!require && !value) {
    return true;
  }

  if (require && value && min && value.length < min && !max) {
    return t('validation.minError', {
      min: min,
    }).toString();
  }

  if (value && max && value.length > max && !min) {
    return t('validation.maxError', {
      max: max,
    }).toString();
  }

  if (value && min && max && (value.length < min || value.length > max)) {
    return t('validation.minMaxError', {
      min: min,
      max: max,
    }).toString();
  }

  return true;
};

export const checkNumeric = (value: Nullable<string> | undefined, require = false, min = 0, max = 0): string | boolean => {
  if (require && (!value || value === '0')) {
    return t('validation.requiredError').toString();
  }

  if (!require && (!value || value === '0')) {
    return true;
  }

  const parsedValue = parseFloat(value ?? '');

  if (isNaN(parsedValue)) {
    return t('validation.numericError').toString();
  }

  if (require && value && min && parsedValue < min && !max) {
    return t('validation.numericMinError', {
      min: min,
    }).toString();
  }

  if (value && max && parsedValue > max && !min) {
    return t('validation.numericMaxError', {
      max: max,
    }).toString();
  }

  if (value && min && max && (parsedValue < min || parsedValue > max)) {
    return t('validation.numericMinMaxError', {
      min: min,
      max: max,
    }).toString();
  }

  return true;
};

export const checkEmail = (value: string | undefined, require = false): string | boolean => {
  if (require && !value) {
    return t('validation.requiredError').toString();
  }

  if (!require && !value) {
    return true;
  }

  if ((value?.length ?? 0) > 150 || !emailRegex.test(value ?? '')) {
    return t('validation.emailError').toString();
  }

  return true;
};

export const checkPhone = (countryCode: string | undefined, phone: string | undefined, require = false): string | boolean => {
  if (require && (!countryCode || !phone)) {
    return t('validation.requiredError').toString();
  }

  if (!require && (!countryCode || !phone)) {
    return true;
  }

  const parsedValue = parseFloat(phone ?? '');
  if (isNaN(parsedValue) || (countryCode === '90' && phone && phone.length !== 10) || (phone && (phone.length > 14 || phone.length < 8 || isNaN(parsedValue)))) {
    return t('validation.phoneError').toString();
  }

  return true;
};

export const checkPassword = (password: string): string | boolean => {
  const result = passwordRegex.test(password);
  if (result) {
    return result;
  } else {
    return t('validation.passwordStrengthError').toString();
  }
};

export const checkPasswordStrength = (value: string, minStrength: 0 | 1 | 2 | 3): string | boolean => {
  let activeStrength = 0;

  if (strongPasswordRegex.test(value)) {
    activeStrength = 3;
  } else if (mediumPasswordRegex.test(value)) {
    activeStrength = 2;
  } else if (weakPasswordRegex.test(value)) {
    activeStrength = 1;
  }

  return activeStrength >= minStrength ? true : t('validation.passwordStrengthError').toString();
};
