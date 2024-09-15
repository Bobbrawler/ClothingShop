import { useEffect } from "react";
import "./style.css";
import { ReactElement } from "react";
import dataMeta from "../../data/clothes.json";

export interface ClothingItem {
  id: string;
  name: string;
  price: number;
  imageSrcIntro: string;
  imageSrc2: string;
  imageSrc3: string;
}

const SalePage = (): ReactElement => {
  useEffect(() => {
    const data: ClothingItem[] = dataMeta;
    var selectClothId: string;

    const saleList = document.querySelector("#saleList") as HTMLElement;
    const brandImage = document.querySelector(".brandLogo") as HTMLElement;
    if (!brandImage) {
      console.error("Element with class 'brandLogoContainer' not found");
      return;
    }

    if (!saleList) {
      console.error("Element with id 'saleList' not found");
      return;
    }

    const backOnMenu = () => {
      brandImage.style.transform = "scale(1.5)";
      setTimeout(() => {
        window.location.href = "../../index.html";
      }, 1000);
    };

    const openSelectItemInfo = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) {
        console.log("ERROR TARGET");
        return;
      }
      const selectCloth = target.closest(".saleListItem");
      console.log(`CLOTH ${selectCloth}`);
      if (!selectCloth) {
        console.log("ERROR SELECT CLOTH");
        return;
      }
      const clothId = selectCloth.getAttribute("clothid");
      if (!clothId) {
        console.log("ERROR NOt FOUND OBJECT");
        return;
      }
      selectClothId = clothId;
      localStorage.setItem("selectClothId", selectClothId);
      let selectClothImageContainer = selectCloth.querySelector(
        ".saleListElementImageContainer"
      ) as HTMLElement;
      if (!selectClothImageContainer) {
        console.log("ERROR selectClothImage");
        return;
      }
      selectClothImageContainer.style.transform = "scale(1.05)";
    };

    const openItemInfo = (event: MouseEvent) => {
      openSelectItemInfo(event);
      setTimeout(() => {
        window.location.href = "../../pages/itemInfo.html";
      }, 1000);
    };

    const createSaleListElement = (item: ClothingItem) => {
      const saleListElement = document.createElement("div");
      const saleListElementImageContainer = document.createElement("div");
      const saleListElementImage = document.createElement("img");
      const saleListElementName = document.createElement("div");
      const saleListElementPrice = document.createElement("div");
      const overlay = document.createElement("div");
      saleListElement.setAttribute("clothId", item.id);
      saleListElementImage.src = `/assets/images/clothing/${item.imageSrcIntro}`;
      saleListElement.classList.add("saleListItem");
      overlay.classList.add("overlayMenu");
      saleListElementName.textContent = item.name;
      saleListElementPrice.textContent = `${item.price} €`;
      saleList.appendChild(saleListElement);
      saleListElement.appendChild(saleListElementImageContainer);
      saleListElementImage.classList.add("image");
      saleListElementImageContainer.classList.add(
        "saleListElementImageContainer"
      );
      saleListElementImageContainer.appendChild(overlay);
      saleListElementImageContainer.appendChild(saleListElementImage);
      saleListElement.appendChild(saleListElementName);
      saleListElement.appendChild(saleListElementPrice);
    };

    for (const itemId in data) {
      if (!saleList) {
        console.error("Not find saleList!");
        break;
      }
      const item = data[itemId];
      if (data.hasOwnProperty(itemId)) {
        createSaleListElement(item);
      }
    }

    brandImage.addEventListener("click", backOnMenu);
    saleList.addEventListener("click", (event) => {
      openItemInfo(event);
    });

    return () => {
      brandImage.removeEventListener("click", backOnMenu);
      saleList.removeEventListener("click", openItemInfo);
    };
  }, []);

  return (
    <div className="container">
      <div className="brandLogoContainer">
        <img
          className="image smallImage brandLogo"
          src="/assets/images/common/brandLogo.jpg"
          alt=""
        />
      </div>

      <div className="product-grid" id="saleList"></div>
    </div>
  );
};

export default SalePage;
