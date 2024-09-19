# Clothing Shop
Clothing Shop is a web application built with React that allows users to browse and select clothing items. The application features a basket for item selection and a dynamic user interface.

---

## Installation and Run
Clone the repository:
```
git clone https://github.com/yourusername/fashion-store.git
```
Go to the project folder:
```
cd ClothingShop
```
Install dependencies:
```
npm install
```
Run the application:
```
npm start
```

Visit `http://localhost:3000` in your web browser to view the application.

---

## Usage
1. Navigate through the home menu to explore items for sale.
2. Click on an item to view its details, including images and descriptions.
3. Add items to your basket by clicking the "Add to Cart" button.
4. View your basket and proceed to checkout from the basket page.

---

## Features
1. **Dynamic Item Browsing**: Users can view a list of clothing items with images and prices.
2. **Basket Functionality**: Users can add items to their basket and view the total cost.
3. **Responsive Design**: The application adapts to various screen sizes for optimal viewing on mobile and desktop devices.
4. **Smooth Animations**: Interactive elements feature hover effects and transitions for improved user experience.

---

## Technologies
1. **React**: A JavaScript library for building user interfaces.
2. **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
3. **CSS**: Styles used to improve the visual presentation of the application.
4. **React Router**: For managing navigation and routing within the app.

---

## Main Files
1. `src/index.tsx`: The entry point of the React application.
2. `src/components/App/index.tsx`: Main application component.
3. `src/components/BasketPage/index.tsx`: Page displaying the item basket.
4. `src/components/SalePage/index.tsx`: Page showing available clothing items on sale.
5. `src/api/index.ts`: API service for fetching clothing data.
6. `src/data/clothes.json`: Sample data for clothing items.

---

## JSON Data Structure
Here’s an example of how the clothing data is structured in `clothes.json`:
```
[
  {
    "id": "cloth1",
    "name": "King Vamp Pants",
    "price": "1257",
    "imageSrcIntro": "kingVampPants_01.jpg",
    "imageSrc2": "kingVampPants_02.jpg",
    "imageSrc3": "kingVampPants_03.jpg",
    "brand": "Rick Owens",
    "size": "Medium",
    "color": "Black",
    "material": "Cotton",
    "gender": "Men",
    "fit": "Normal",
    "pocketCount": "2"
  },
  {
    "id": "cloth2",
    "name": "Pink Pyro Pants",
    "price": "630",
    "imageSrcIntro": "pinkPyroPants_01.jpg",
    ...
  }
]
```

