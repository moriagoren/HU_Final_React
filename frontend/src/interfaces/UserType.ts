export interface UserType {
    _id?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phone?: string;
    email: string;
    password?: string;
    imageUrl?: string;
    imageAlt?: string;
    state?: string;
    country?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    zip?: string;
    token?: string;
    admin?: boolean;
    biz?: boolean;
    user?: any
}