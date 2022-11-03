export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const minStringLength = new RegExp('^[a-zA-Z0-9 .\]{3,}$');
export const maxStringLength = new RegExp('^[a-zA-Z]{13}$');
export const validContact = new RegExp('^[0-9]{11}$');
export const validBOD = new RegExp('^[0-9/\]{8,}$');


/* LANGUAGE */
export const INVALID_INPUT_MESSAGE_LANG = 'Invalid Input, please try again';



/* API */
export const API_SRC = 'https://api.publicapis.org/entries';