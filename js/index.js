const tabButtons   = document.querySelectorAll(".section-content_button");
const tabItems = document.querySelectorAll(".section-content_tab");

tabButtons.forEach((item) => {
    item.addEventListener("click", () => {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('button_active')) {
            tabButtons.forEach((item) => {
                item.classList.remove('button_active');
            });

            tabItems.forEach((item) => {
                item.classList.remove('content-tab_active');
            });

            currentBtn.classList.add('button_active');
            currentTab.classList.add('content-tab_active');
        }
    })
})
