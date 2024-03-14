import {emailValidate} from "../../../../../regex";

export const emailValidators = {
    required: "Email is required! Please write your email!",
    pattern: {
        value: emailValidate,
        message: "Email is not valid! Please enter valid email!"
    }
}

export const nameValidators = {
    required: "Name is required! Please write your name!",
    maxLength: {
        value: 10,
        message: "Name is too long! Please enter valid name!"
    },
    minLength: {
        value: 3,
        message: "Name is too short! Please enter valid name!"
    },
}

export const brandsValidator = {
    required: "Brands is required! Please choose brand car"
}

export const shipToValidator = {
    required: "Ship to is required! Please choose the country you want to go to"
}