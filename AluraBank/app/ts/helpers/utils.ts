import { Negotiation } from "../models/index";

export function print(...objects: any[]) {
    objects.forEach(obj => obj.toText());
}