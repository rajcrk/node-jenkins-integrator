export type AssetModel = {
    id: string,
    name: string,
    type: string,
    address: {
        street: string,
        city: string,
        country: string
    },
    price: string,
    priceUnit: string,
    area: string,
    areaUnit: string
};