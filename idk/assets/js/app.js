import { ORDER_MODAL, SHOP_ITEM_MODAL } from "./modals";

let [showOrderModal] = ORDER_MODAL();

if(catalogJSON) {
    let [showShopItemModal] = SHOP_ITEM_MODAL();
    const items = document.querySelectorAll(".catalog__items--item");

    items.forEach(item => {
        const itemId = parseInt(item.getAttribute("data-item-id"));
        const object = catalogJSON[itemId];

        item.querySelector(".catalog__items--item--button").addEventListener("click", () => {
            showShopItemModal(object);
        })
    })
}