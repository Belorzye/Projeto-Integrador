export const phoneRegex = /^(\(\d{2}\)|\d{2})?(9\d{8}|\d{4,5}-\d{4})$/;

export const emailRegex =
  /^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const valueRegex = /^\d+(\.\d+)?$/;

export const cepRegex = /^\d{8}$/;

export const onlyNumbersRegex = /^[0-9]+$/;

export const onlyLettersRegex = /^[\p{L}\s.,'’´~-]+$/u;
