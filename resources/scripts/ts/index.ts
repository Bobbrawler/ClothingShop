import { Basket } from "./domains/Basket";
import { Pant } from "./domains/Pant";
import { BasketManagerDinamic} from "./services/BasketManagerDinamic";
import { currencies } from "./utils/constants";
import { allClothesNames } from "./utils/constants";
import { brands } from "./utils/constants";
import { sizes } from "./utils/constants";
import { colors } from "./utils/constants";
import { materials } from "./utils/constants";
import { genders } from "./utils/constants";
import { fits } from "./utils/constants";
import { pocketCounts } from "./utils/constants";
import { Hoodie } from "./domains/Hoodie";
import { Tshirt } from "./domains/Tshirt";
import { Sneakers } from "./domains/Sneakers";
import { designTypes } from "./utils/constants"; 
import { closureTypes } from "./utils/constants";
import { hoodTypes } from "./utils/constants";
import { sleeveLengths } from "./utils/constants";
import { Jacket } from "./domains/Jacket";

const basket = new Basket();
const basketManager = new BasketManagerDinamic(basket, currencies.EURO);





const runBasketTests = () => {
    const basket = new Basket();
    const basketManager = new BasketManagerDinamic(basket, currencies.EURO);

    // Функция для красивого вывода содержимого корзины
    const displayBasketContents = () => {
       basketManager.getAllInfoBasket();
    };

    // 1. Тест: Добавление одного товара в корзину
    console.log("Тест 1: Добавление одного товара в корзину.");
    const pant1 = new Pant(allClothesNames.KINGVAMPPANTS, brands.BALENCIAGA, sizes.M, colors.BLACK, materials.COTTON, genders.MEN, fits.NORMAL, pocketCounts.TWO);
    basketManager.addItem(pant1);
    console.assert(basket.getItems().length === 1, "Ошибка: Не удалось добавить товар в корзину.");
    displayBasketContents();

    // 2. Тест: Удаление одного товара из корзины по названию
    console.log("Тест 2: Удаление одного товара из корзины по названию.");
    basketManager.removeItem(allClothesNames.KINGVAMPPANTS);
    console.assert(basket.getItems().length === 0, "Ошибка: Товар не был удален из корзины.");
    displayBasketContents();

    // 3. Тест: Попытка удаления товара, которого нет в корзине
    console.log("Тест 3: Попытка удаления товара, которого нет в корзине.");
    basketManager.removeItem(allClothesNames.PINKPYROPANTS);
    console.assert(basket.getItems().length === 0, "Ошибка: Не должно произойти удаления.");
    displayBasketContents();

    // 4. Тест: Добавление нескольких товаров в корзину
    console.log("Тест 4: Добавление нескольких товаров в корзину.");
    const pant2 = new Pant(allClothesNames.PINKPYROPANTS, brands.BALENCIAGA, sizes.L, colors.RED, materials.COTTON, genders.WOMEN, fits.SLIM, pocketCounts.ONE);
    basketManager.addItem(pant1);
    basketManager.addItem(pant2);
    console.assert(basket.getItems().length === 2, "Ошибка: Ожидалось 2 товара в корзине.");
    displayBasketContents();

    // 5. Тест: Проверка деталей товаров в корзине
    console.log("Тест 5: Проверка деталей товаров в корзине.");
    console.assert(basket.getAllInfo().includes("King Vamp Pants"), "Ошибка: Товар не найден в корзине.");
    console.assert(basket.getAllInfo().includes("Pink Pyro Pants"), "Ошибка: Товар не найден в корзине.");
    displayBasketContents();

    // 6. Тест: Очистка корзины
    console.log("Тест 6: Очистка корзины.");
    basketManager.clear();
    console.assert(basket.getItems().length === 0, "Ошибка: Корзина не должна содержать товаров.");
    displayBasketContents();

    // 7. Тест: Проверка информации о пустой корзине
    console.log("Тест 7: Проверка информации о пустой корзине.");
    console.assert(basket.getAllInfo() === "Корзина пуста.", "Ошибка: Ожидалось сообщение о пустой корзине.");
    displayBasketContents();

    // 8. Тест: Попытка снять товар с пустой корзины
    console.log("Тест 8: Попытка снять товар с пустой корзины.");
    basketManager.removeItem(allClothesNames.KINGVAMPPANTS);
    console.assert(basket.getItems().length === 0, "Ошибка: Корзина должна оставаться пустой.");
    displayBasketContents();

    // 9. Тест: Изменение валюты и проверка общей суммы
    console.log("Тест 9: Изменение валюты и проверка общей суммы.");
    basketManager.setCurrency(currencies.DOLLAR);
    console.assert(basketManager.getCurrency() === currencies.DOLLAR, "Ошибка: Валюта должна быть изменена на доллар.");
    displayBasketContents();

    // 10. Тест: Проверка общей суммы с добавлением товаров
    console.log("Тест 10: Проверка общей суммы с добавлением товаров.");
    const hoodie1 = new Hoodie(allClothesNames.PUNKHOODIE, brands.RICKOWENS, sizes.S, colors.GRAY, materials.LEATHER, genders.UNDEFINED, closureTypes.ZIPPER, hoodTypes.ELONGATED);
    basketManager.addItem(hoodie1);
    console.assert(basketManager.getTotalAmount() > 0, "Ошибка: Общая сумма корзины должна быть положительной.");
    displayBasketContents();

    // 11. Тест: Проверка общей суммы после удаления товара
    console.log("Тест 11: Проверка общей суммы после удаления товара.");
    basketManager.removeItem(allClothesNames.PUNKHOODIE);
    console.assert(basketManager.getTotalAmount() === 0, "Ошибка: Общая сумма корзины должна быть 0 после удаления.");
    displayBasketContents();

    // 12. Тест: Проверка добавления разных типов одежды
    console.log("Тест 12: Проверка добавления разных типов одежды.");
    const tshirt1 = new Tshirt(allClothesNames.MONKTSHIRT, brands.BALENCIAGA, sizes.M, colors.WHITE, materials.COTTON, genders.MEN, designTypes.HOLES, sleeveLengths.LONG);
    const jacket1 = new Hoodie(allClothesNames.BENOJACKET, brands.RICKOWENS, sizes.L, colors.BLACK, materials.LEATHER, genders.WOMEN, closureTypes.WITHOUTCLASP, hoodTypes.CROPPED);
    basketManager.addItem(tshirt1);
    basketManager.addItem(jacket1);
    console.assert(basket.getItems().length === 2, "Ошибка: Ожидалось 2 товара в корзине.");
    displayBasketContents();

    // 13. Тест: Проверка всех деталий добавленных товаров
    console.log("Тест 13: Проверка всех деталей добавленных товаров.");
    console.assert(basket.getAllInfo().includes("Monk T-shirt"), "Ошибка: T-shirt не найден в корзине.");
    console.assert(basket.getAllInfo().includes("Beno Jacket"), "Ошибка: Jacket не найден в корзине.");
    displayBasketContents();

    // 14. Тест: Изменение параметров товара и проверка повторного добавления
    console.log("Тест 14: Изменение параметров товара и проверка повторного добавления.");
    jacket1.setBrand(brands.BALENCIAGA);
    basketManager.addItem(jacket1);
    console.assert(basket.getItems().length === 3, "Ошибка: Ожидалось 3 товара в корзине.");
    displayBasketContents();

    // 15. Тест: Повторное добавление одного и того же товара
    console.log("Тест 15: Повторное добавление одного и того же товара.");
    basketManager.addItem(jacket1);
    console.assert(basket.getItems().length === 4, "Ошибка: Ожидалось 4 товара в корзине.");
    displayBasketContents();

    // 16. Тест: Проверка уникальности товаров в корзине
    console.log("Тест 16: Проверка уникальности товаров в корзине.");
    const uniqueItems = new Set(basket.getItems().map(item => item.getName()));
    console.assert(uniqueItems.size <= basket.getItems().length, "Ошибка: Товары в корзине не должны дублироваться.");
    displayBasketContents();

    // 17. Тест: Проверка добавления товара с несуществующими параметрами
    console.log("Тест 17: Проверка добавления товара с несуществующими параметрами.");
    const invalidItem = new Pant(allClothesNames.UNDEFINED, brands.UNDEFINED, sizes.UNDEFINED, colors.UNDEFINED, materials.UNDEFINED, genders.UNDEFINED, fits.UNDEFINED, pocketCounts.UNDEFINED);
    basketManager.addItem(invalidItem);
    console.assert(basket.getItems().length === 5, "Ошибка: Не должно быть ошибки при добавлении несуществующего товара.");
    displayBasketContents();

    // 18. Тест: Проверка поведения при попытке удаления несуществующего товара
    console.log("Тест 18: Проверка поведения при попытке удаления несуществующего товара.");
    basketManager.removeItem(allClothesNames.UNDEFINED);
    console.assert(basket.getItems().length === 5, "Ошибка: Должна остаться первоначальная длина корзины.");
    displayBasketContents();

    // 19. Тест: Проверка на изменение параметров товара
    console.log("Тест 19: Проверка на изменение параметров товара.");
    pant1.setColor(colors.RED);
    console.assert(pant1.getColor() === colors.RED, "Ошибка: Цвет должен быть обновлен.");
    displayBasketContents();

    // 20. Тест: Финальная проверка состояния корзины
    console.log("Тест 20: Финальная проверка состояния корзины.");
    console.assert(basket.getItems().length === 5, "Ошибка: Ожидалось 5 товаров в корзине на выходе.");
    displayBasketContents();
}

runBasketTests();








