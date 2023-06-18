import * as constant from './constant';
import bg1Icon from '../../assets/bg1.jpg';
import bg2Icon from '../../assets/bg2.jpg';
import bg3Icon from '../../assets/bg3.jpg';

export const getCardImageByPropertyType = (propertyType) => {
  switch (propertyType) {
    case 1:
      return bg1Icon;
    case 2:
      return bg2Icon;
    case 3:
      return bg3Icon;
    default:
      return bg1Icon;
  }
};

export function setSessionStorageObject(key, value) {
  sessionStorage.setItem(key, value);
}

export function getSessionStorageObject(key) {
  return sessionStorage.getItem(key);
}

export function setLocalStorageObject(key, value) {
  localStorage.setItem(key, value);
}

export function getLocalStorageObject(key) {
  return localStorage.getItem(key);
}

export function removeLocalStorageObject(key) {
  return localStorage.removeItem(key);
}

export function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return "";
}

export function getSum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export function findPercentageValue(value, percentage) {
  return (value * percentage) / 100;
}

export function allDefined(...args) {
  return args.every((arg) => arg !== undefined);
}

export function convertToTitleCase(string) {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getSchemaFieldTitle(propertyName) {
  const newPropertyName = propertyName.replace(/\./g, '');
  const wordsArray = newPropertyName.split(/(?=[A-Z])/);
  const updatedString = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return updatedString;
}


export const ADD_PROPERTY_FORMS = [
  {
    label: constant.STEP1_FORM_NAME,
  },
  {
    label: constant.STEP2_FORM_NAME,
  },
  {
    label: constant.STEP3_FORM_NAME,
  },
  {
    label: constant.STEP4_FORM_NAME,
  },
  {
    label: constant.STEP5_FORM_NAME,
  },
  {
    label: constant.STEP6_FORM_NAME,
  },
  {
    label: constant.STEP7_FORM_NAME,
  },
  {
    label: constant.STEP8_FORM_NAME,
  },
  {
    label: constant.STEP9_FORM_NAME,
  },
  {
    label: constant.STEP10_FORM_NAME,
  },
];

