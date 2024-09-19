import { IclothInMeta } from "../interfaces";
import clothesMeta from "../data/clothes.json"
import allIntroImagesNames from "../data/introImagesName.json"
export class API {
    public static getAllClothes(): IclothInMeta[] {
        const allClothes:IclothInMeta[] = clothesMeta;
        return allClothes;
    }

    public static getClothesById(id: string): any {
        
    }

    public static getAllIntroImagesNames(): string[] {
        const allIntros:string[] = allIntroImagesNames;
        return allIntros;
    }
}