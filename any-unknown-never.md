# Understanding `any`, `unknown`, and `never` in TypeScript

## Introduction
In TypeScript, `any` stops type checking, so when it is used the compiler will not check the type. The other two, `unknown` and `never`, sit at the top and the bottom of the TypeScript type hierarchy respectively.

## any: stop type checking
You can assign anything to type `any`. For example:

    let value: any = 50;
    value = "fifty";

Since `value` is of type `any`, we can assign a number, a string or any other type of value to this variable.

## unknown: the safe top type
We can assign any value to a variable of type `unknown`, but when we want to use it, we need to narrow down its type first. For example:

    let input: unknown = "I am a student of programming hero";

    console.log(input.toUpperCase()); // compile-time error

Instead, we can use:

    let input: unknown = "I am a student of programming hero";

    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }

## never: the bottom type
The `never` type means that no value can ever exist for it. It is used as the return type of functions that never finish normally, such as a function that always throws an error. For example:

    const throwError = (message: string): never => {
        throw new Error(message);
    };

`never` is the bottom of the hierarchy. It can be assigned to every other type, but nothing can be assigned to `never`.

## Why `unknown` over `any`
With `any`, calling `value.toUpperCase()` on a number passes the compiler and crashes at runtime. With `unknown`, the compiler stops us before the code runs until we check the type. We keep the flexibility without losing safety.

## Conclusion
Use `unknown` when the type is truly not known, use `never` for cases that can never happen, and avoid `any` unless there is no other option.