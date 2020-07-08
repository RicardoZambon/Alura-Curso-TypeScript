import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {

    getNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((data: PartialNegotiation[]) =>
                data.map(n => new Negotiation(new Date(), n.vezes, n.montante))
            )
            .catch(err => { throw err; });
    }
}

export interface HandlerFunction {
    (res: Response): Response;
}