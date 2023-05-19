export const RESOURCE_BASE_URL = "http://localhost:4000";

export const protectedRoutes: String[] = ["/", "/reviews"];

export enum InputTypes {
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  TEXT = "text",
}

export const phoneRegExp: RegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const maxRate: number = 5;
