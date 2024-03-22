import {
    emailValidator,
    nameValidator,
    passwordConfirmedValidator,
    passwordValidator
} from "../../../../../../../shared/utils/validators";
import {TRegisterForm} from "../types/register.types";
import {TFields} from "../../../../../../../shared/components/Form/types/form.types";

export const formFields = [
    {
        label: "Full name",
        name: "name",
        placeholder: "Write your name",
        rules: nameValidator,
    },
    {
        label: "Email address",
        name: "email",
        placeholder: "Write your email",
        rules: emailValidator,
    }
] as TFields<TRegisterForm>[];
export const passwordFields = [
    {
        label: "Password",
        name: "password",
        placeholder: "Come up with a password",
        rules: passwordValidator,
    },
    {
        label: "Confirm password",
        name: "confirmedPassword",
        placeholder: "Write your password again",
        rules: passwordConfirmedValidator,
    }
] as TFields<TRegisterForm>[];