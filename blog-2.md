# How `Pick` and `Omit` Keep TypeScript Code DRY

## Introduction
In the large application, there is  a lot of interface that represents data from a database or an API.However, different parts of our feacture  usually only need a small portion of that data.thats why instead of writing new interfaces from starts to ends leads to code duplication thats why TypeScript gives us two powerful tool such as  Pick and Omit. These utility types help us follow the DRY (Don't Repeat Yourself).it helps by creating specialized "slices" of existing interfaces.

### Body

### problem
The Problem is you have a main interface for a User in your website 

### Examples
Main interface 
```typescript
interface User {
    id: string;
    username: string;
    email: string;
    phoneNumber: string;
    address: string;
    createdAt: Date;
}
```

Profile Card interface we just need username and email
```typescript
interface ProfileCard {
    username: string;
    email: string;
}
```
Why is this bad? If you ever decide to rename username to displayName in the main User interface, you now have to find and change it in every single "manual" interface you created. This is how bugs are born.

### The Solution: Pick and Omit

1. Using Pick

Pick allows you to choose exactly which properties you want from the main interface. It creates a new type using only those specific keys.
```typescript
type ProfileCard = Pick<User, "username" | "email">;

```

2. Using Omit
Omit does the opposite.it allows everything from the main interface except for these specific keys

```typescript
type UserFormFields = Omit<User, "id" | "createdAt">;

```

DRY stands for Don't Repeat Yourself. By using Pick and Omit, you maintain a Single Source of Truth. it creats

### Zero Redundancy :
you only define the property types like string or number once in the main interface.

### Automatic Updates:
When you update the main interface,all your "slices" updates automitically 

## Conclusion
Pick and Omit are essential for keeping your TypeScript projects clean and manageable. Instead of creating a messy web of similar-looking interfaces, you can create one strong main interface and slice it up as needed. This helps saves time, prevents errors, and ensures that your code remains truly DRY.