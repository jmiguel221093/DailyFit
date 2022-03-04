/**
 *  Model for new user
 */
export interface NewUserModel {
    fullName: string; // Full name of the user
    username: string; // Username of the user
    email: string; // Email of the user
    password: string; // Password of the user
    gender?: 'M' | 'F'; // Gender of the user, M used to Male, F used to Female
    birthdate?: string; // User birthdate
}
