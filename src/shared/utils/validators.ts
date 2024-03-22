import {emailValidate, lowerLetter, passNumber, passUniqueSymbol, upperLetter} from "../regex";
import {RegisterOptions, UseFormGetValues} from "react-hook-form";
import {TRegisterForm} from "../../components/Pages/components/Authorization/components/Register/types/register.types";

export const emailValidator = {
    required: "Email is required! Please write your email!",
    pattern: {
        value: emailValidate,
        message: "Email is not valid! Please enter valid email!"
    }
}

export const nameValidator: RegisterOptions = {
    required: "Name is required! Please write your name!",
    maxLength: {
        value: 10,
        message: "Name is too long! Please enter valid name!"
    },
    minLength: {
        value: 3,
        message: "Name is too short! Please enter valid name!"
    },
    validate: {
        hasUpperCase: (value: string) => upperLetter.test(value) || "Name must contain one or more Uppercase letters!",
        hasLowerCase: (value: string) => lowerLetter.test(value) || "Name must contain one or more Lowercase letters!",
    }
}

export const brandsValidator = {
    required: "Brands is required! Please choose brand car"
}

export const shipToValidator = {
    required: "Ship to is required! Please choose the country you want to go to"
}

export const passwordLoginValidator = {
    required: "Password is required! Please write your password!",
}

export const passwordValidator: RegisterOptions = {
    required: "You don't write password!",
    minLength: {
        value: 4,
        message: "Your password is too short! Please enter a password of more than 4 characters!"
    },
    validate: {
        hasNumber: (value) => passNumber.test(value) || "Password must contain one or more Numbers!",
        hasUpperCase: (value) => upperLetter.test(value) || "Password must contain one or more Uppercase letters!",
        hasLowerCase: (value) => lowerLetter.test(value) || "Password must contain one or more Lowercase letters!",
        hasSymbol: (value) => passUniqueSymbol.test(value) || "Password must contain one or more Special symbols!"
    }
}

export const  passwordConfirmedValidator = (getValues: UseFormGetValues<TRegisterForm>) : RegisterOptions => {
    return {
        required: "Confirmation password is required",
        validate: (value) => value === getValues('password') || "The passwords do not match",
    }
}
export const checkboxValidator = {
    required: "Please agree Terms of Service and Privacy Policy!"
}