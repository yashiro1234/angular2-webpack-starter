import {Control, Validators, NG_VALIDATORS} from "angular2/common";
import {provide, Directive, OpaqueToken, Provider} from "angular2/core";
import {isPresent, CONST_EXPR} from "angular2/src/facade/lang";

export class CustomValidators {

  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static email(control: Control): {[key: string]: boolean} {
    if (isPresent(Validators.required(control)))
      return null;

    var v: string = control.value;
    return CustomValidators.EMAIL_REGEX.test(v) ? null : {"email": true};
  }
}


const EMAIL_VALIDATOR = CONST_EXPR(new Provider(NG_VALIDATORS, {useValue: CustomValidators.email, multi: true}));

@Directive({
  selector: "[type=email][ngControl],[type=email][ngFormControl],[type=email][ngModel]",
  providers: [EMAIL_VALIDATOR]
})
export class EmailValidator {
}
