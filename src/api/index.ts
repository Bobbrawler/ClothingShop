import { IclothInMeta } from "../interfaces";
import clothesMeta from "../data/clothes.json"
export class API {
    public static getAllClothes(): IclothInMeta[] {
        const allClothes:IclothInMeta[] = clothesMeta;
        return allClothes;
    }

    public static getClothesById(id: string): any {
        
    }
}