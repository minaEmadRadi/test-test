
    export class User
    {
        id!: number;
        name!: string;
        email!: string;
        password!: string;
        age!: number;
        attendances: any; // Use 'any' if the type is unclear, or define a more specific type if known
        userProjects: any; // Same as above, specify the type if known
    }