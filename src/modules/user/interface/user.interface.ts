

export interface User{
    readonly id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    readonly createdAt?: Date;
    updatedAt?: Date;
}