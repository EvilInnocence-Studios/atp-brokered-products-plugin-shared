export declare interface IBrokerage {
    id: string;
    name: string;
    urlTemplate: string;
}

export type NewBrokerage = Partial<Omit<IBrokerage, "id">>;