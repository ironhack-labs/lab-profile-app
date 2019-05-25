import passwordValidator from "password-validator";
import UIkit from "uikit";

// prettier-ignore
export const pwdValidator = password => {
  let schema = new passwordValidator();
  schema
    .is().min(8)
    .is().max(16)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()
    .has().not().spaces();
  return schema.validate(password);
};

export const notification = message => {
  UIkit.notification({
    message: `<div class='uk-text-center'><span>${message}</span></div>`,
    status: "danger",
    pos: "top-center",
    timeout: 2000
  });
};
