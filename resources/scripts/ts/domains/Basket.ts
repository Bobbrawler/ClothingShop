import { Cloth } from "./Cloth";

export class Basket {
    public items: Cloth[] = [];

    constructor(items: Cloth[] = []) {
        this.items = items; // Используем сеттер
    }

    getItems(): Cloth[] {
        return this.items;
    }

    setItems(value: Cloth[]) {
        this.items = value;
    }

    public addItem(item: Cloth): void {
        this.items.push(item);
    }

    removeItem(item: Cloth): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return;
        }
    }

    getAllInfo(): string {
        if (this.items.length === 0) {
            return "Корзина пуста.";
        }
        return this.items.map(item => item.getAllInfoString()).join("\n");
    }
}
