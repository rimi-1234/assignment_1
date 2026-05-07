# Why `any` is a Type Safety Hole and `unknown` is Safer

## Introduction
when we use typescript, we want that computer try to help us find error before we get runtime error. Sometime we get data that we do not what type data we got like we get data from api. In these cases, developers usually use any or unknown. while they look similar, one is like a "type safety hole" and the other is a "shield.

Let's explore the key differences:

## Body

### any

when we use any that is like they behave like they what they doing." It turns off all the safety checks. If they make a mistake, TypeScript will not warn them, and your website might crash for the use

### Examples

**With `any` (Unsafe):**
```typescript
let myData: any = 12345; 
console.log(myData.toUpperCase());  //they run face runtime error 
```


### unknown
The unknown type also accepts any data, but they are much careful than any. they don't know what this is yet, they will not let you use it until you check it

### Examples
**With `unknown` (Safe):**
```typescript
let myData: unknown = "Hello";
if (typeof myData === "string") {
    console.log(myData.toUpperCase()); // Now it works perfectly!
}
```

### Type Narrowing
Type Narrowing is that first checking the type before using it. it can "narrow" a type using a simple if statement:

### Examples
```typescript
function printSize(input: unknown) {
    if (typeof input === "string") {
        console.log("String length: " + input.length);
    } else if (typeof input === "number") {
        console.log("Number value: " + input.toFixed(0));
    }
}
```

## Conclusion

any: It turns off all the safety. (Dangerous)

unknown: "I don't know what this is yet, so I won't let you touch it until you check." (Safe)

The Check (typeof): This is the "Security Guard" that turns unknown into a safe, usable type.