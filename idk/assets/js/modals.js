const generateDefaultModal = (id, title, content) => {
    return `
        <div class="modal" id="${id}">
            <div class="modal-dialog">
                <div class="modal__title">
                    <div class="modal__title--left">
                        <h3>${title}</h3>
                    </div>
                    <div class="modal__title--line"></div>
                    <div class="modal__title--right">
                        <i class="material-icons">close</i>
                    </div>
                </div>
                <div class="modal__content">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

const showModal = modal => {
    modal.classList.remove("toggling-out");
    modal.classList.add("show");
}

const closeModal = modal => {
    modal.classList.add("toggling-out");
    setTimeout(() => {
        modal.classList.remove("show");
        modal.classList.remove("toggling-out");
    }, 200);
}

const bindEvents = modal => {
    modal.querySelector(".modal__title--right i").addEventListener("click", () => {
        closeModal(modal);
    });
}

export const ORDER_MODAL = () => {
    const container = document.querySelector("#order-modal");
    const show = (data) => {
        console.log(data);
    }

    return [show];
}

export const SHOP_ITEM_MODAL = () => {
    let container = null;

    const colorPicker = items => {
        let pickerItems = Object.entries(items).map(value => {
            return `<div class="color__picker--item" style="--background: ${value[1].color};">
                    <div class="color__picker--item--color" style="background: ${value[1].color};"></div>
                    <div class="color__picker--item--label">
                        ${value[1].label}
                    </div>
                </div> `
        });

        let pickerHTML =  `<input type="hidden" name="color" />
            <div class="color__picker">
                ${pickerItems.join("")}
            </div>`;

        let picker = document.createElement("div");
        picker.classList.add("color__picker--wrapper");
        picker.innerHTML = pickerHTML;
        return picker;
    };

    const SPEC_SELECTOR = {
        "colors": {
            label: "Цвета",
            generator: items => colorPicker(items)
        }
    };

    const show = (data) => {
        if(container) {
            let content = container.querySelector(".modal__content");
            let selectSpecs = [];
            let specs = ``;

            Object.entries(data.specs_select).map(spec => {
                let key = spec[0],
                    value = spec[1];

                let generateValue = SPEC_SELECTOR[key].generator(value);
                let specElement = document.createElement("div");

                specElement.classList.add("catalog__popup--meta--right--specs--item");
                specElement.innerHTML = `<div class="catalog__popup--meta--right--specs--item--title">
                        ${SPEC_SELECTOR[key].label}
                    </div>
                    <div class="catalog__popup--meta--right--specs--item--input"></div>`;
                
                specElement.querySelector(".catalog__popup--meta--right--specs--item--input").appendChild(generateValue);
                selectSpecs.push(specElement);
            });

            Object.entries(data.specs).map(spec => {
                let key = spec[0],
                    value = spec[1];

                specs += `
                    <div class="catalog__popup--specs--item">
                        <b>${value.label}</b>
                        <span>${value.value}</span>
                    </div>
                `;
            });

            if(specs !== "") {
                specs = `<div class="catalog__popup--specs">${specs}</div>`;
            }

            content.innerHTML = `
                <div class="catalog__popup">
                    <div class="catalog__popup--meta">
                        <div class="catalog__popup--meta--left">
                            <img src="${data.picture}" />
                        </div>
                        <div class="catalog__popup--meta--right">
                            <div class="catalog__popup--meta--right--title">
                                <h3>${data.title}</h3>
                                <span>${data.price} тг.</span>
                            </div>
                            ${selectSpecs.length !== 0 ? `<div class="catalog__popup--meta--right--specs"></div>` : ""}
                        </div>
                    </div>
                    ${specs}
                </div>
            `;

            selectSpecs.forEach(value => {
                content.querySelector(".catalog__popup--meta--right--specs").appendChild(value);
            })
        }   

        showModal(container);
    }

    const modalHTML = generateDefaultModal("order-modal", "Покупка товара", ``);
    const modalElement = document.createElement("div");
    modalElement.innerHTML = modalHTML;

    container = modalElement.querySelector(".modal");
    bindEvents(container);

    document.body.prepend(container);

    modalElement.remove();
    return [show];
}

document.addEventListener("mouseup", (e) => {
    let modal = document.querySelector(".modal.show");

    if(modal) {
        if(e.target === modal) {
            closeModal(modal);
        }
    }
})

export default {
    ORDER_MODAL
};