import { User } from "./user";

export interface Project {
    id: string;
    user: User;
    name: string;
    description: string;
    envtype: string;
    host: { [urls: string]: string[] };
    priceToPay: number;
    nextPricingDate: string;
    createdon: string;
}