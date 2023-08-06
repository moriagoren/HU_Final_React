import { getToken } from "../auth/TokenManager";
import { CardType } from "../interfaces/CardType";
import { UserType } from "../interfaces/UserType";


const serverUrl = 'http://localhost:3000/';

const usersUrl = `${serverUrl}users/`;
const cardUrl = `${serverUrl}cards/`;

export async function signup(user: UserType): Promise<UserType> {
    const res = await fetch(`${usersUrl}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function login(user: UserType): Promise<UserType> {
    const res = await fetch(`${usersUrl}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function getCards(): Promise<Array<CardType>> {
    const res = await fetch(`${cardUrl}`);
    return res.json();
}

export async function addCard(card: CardType): Promise<CardType> {
    const res = await fetch(`${cardUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": getToken()
        },
        body: JSON.stringify(card)
    });
    return res.json();
}
export async function editCard(card: CardType): Promise<CardType> {
    const res = await fetch(`${cardUrl}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": getToken()
        },
        body: JSON.stringify(card)
    });
    return res.json();
}
export async function deleteCard(_id: string): Promise<CardType> {
    const res = await fetch(`${cardUrl}${_id}`, {
        method: "DELETE",
        headers: {
            // 'x-auth-token': getToken()
        },
    });
    return res.json();
}





