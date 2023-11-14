
import { UserType } from "../interfaces/UserType";

const tokenKey = 'token';
const userKey = 'user';
export function setToken(tokenValue?: string) {
    if (!tokenValue) return;
    localStorage.setItem(tokenKey, tokenValue);
}

export function getToken(): string {
    return localStorage.getItem(tokenKey) || '';
}

export function removeToken() {
    localStorage.removeItem(tokenKey);
    window.location.reload()
}

export function verifyToken(): boolean {
    return getToken().length > 0;
}

export function setUser(user: UserType) {
    if (!user) return
    const jsonUser = JSON.stringify(user);

    localStorage.setItem(userKey, jsonUser);

}

export function getUser(): UserType | undefined {
    const jsonUser = localStorage.getItem(userKey);
    if (!jsonUser) return
    const parsedUser = JSON.parse(jsonUser);
    return parsedUser;

}

export function removeUser() {
    localStorage.removeItem(userKey);
    localStorage.removeItem(tokenKey);
    window.location.reload()
}

export function getAdmin(): string {
    return localStorage.getItem("admin") || ""
}

export function verifyAdmin(): boolean {
    return getAdmin().length === 4
}
