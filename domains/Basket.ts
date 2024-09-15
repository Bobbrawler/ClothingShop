
// interface Cloth {

// }



// export class Basket<T extends Cloth> {
//   private items: T[] = [];
//   private totalAmount: number = 0;
//   constructor(items: T[] = []) {
//     this.items = items;
//   }

//   public getItems(): T[] {
//     return this.items;
//   }

//   public setItems(value: T[]) {
//     this.items = value;
//   }

//   public getTotalAmount(): number {
//     return this.totalAmount;
//   }

//   public addItem(item: T): void {
//     const typeOperation = "+";
//     this.items.push(item);
//     this.updateTotalAmount(item, typeOperation);
//   }

//   public removeItem(item: T): void {
//     const index = this.getRemoveItemIndex(item);;
//     if (index > -1) {
//       this.items.splice(index, 1);
//       return;
//     }
//   }

//   private updateTotalAmount(item: T, typeOperation: string) {
//     const increaseOperation = "+";
//     const itemInData = data.find(cloth => cloth.id === item.id);
//     const itemPrice = itemInData? itemInData.price: 0;
//     if (typeOperation === increaseOperation) {
//       this.totalAmount += itemPrice;
//       return;
//     }
//     this.totalAmount -= itemPrice;
//   }

//   private getRemoveItemIndex(item: T): number {
//     return this.items.indexOf(item);
//   }

//   public getAllInfo(): string {
//     if (this.items.length === 0) {
//       return "Корзина пуста.";
//     }
//     return this.items.map((item) => item.getAllInfoString()).join("\n");
//   }


// }
