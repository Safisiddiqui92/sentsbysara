/* =========================================================================
   SCENTS BY SARA - SHOP PAGE LOGIC
   Handles:
   - Variant Selection (Swatches & Size)
   - Filter Toggle & Logic
   - Sort Logic
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Variant Selection: Color Swatches --- */
    const swatches = document.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            const parent = swatch.closest('.color-swatches');
            parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');

            // In a real app, this would swap the product image
            // console.log(`Selected color: ${swatch.classList[1]}`);
        });
    });

    /* --- Variant Selection: Size Dropdown --- */
    const sizeSelectors = document.querySelectorAll('.size-dropdown');
    sizeSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            // Toggle a simple dropdown or cyclic selection for demo
            const sizes = ['SLIM', 'CURVY', 'PLUS-SIZE'];
            const currentSpan = selector.querySelector('span');
            const currentText = currentSpan.textContent.replace('SIZE: ', '');
            let nextIndex = (sizes.indexOf(currentText) + 1) % sizes.length;
            currentSpan.textContent = `SIZE: ${sizes[nextIndex]}`;

            // console.log(`Selected size: ${sizes[nextIndex]}`);
        });
    });

    /* --- Filter Logic Disabled for Shopify Native Filters --- */

    /* --- Sort Dropdown Logic --- */
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('click', () => {
            const currentSort = document.getElementById('current-sort');
            if (currentSort.textContent === 'PRICE (LOW TO HIGH)') {
                currentSort.textContent = 'PRICE (HIGH TO LOW)';
                sortProducts('desc');
            } else {
                currentSort.textContent = 'PRICE (LOW TO HIGH)';
                sortProducts('asc');
            }
        });
    }

    function sortProducts(order) {
        const grid = document.querySelector('.grid-cols-4');
        const cards = Array.from(grid.querySelectorAll('.shop-card'));

        cards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price-current').textContent.replace('£', ''));
            const priceB = parseFloat(b.querySelector('.price-current').textContent.replace('£', ''));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        // Re-append in order
        cards.forEach(card => grid.appendChild(card));
    }

    /* --- Add to Cart Logic --- */
    const buyBtns = document.querySelectorAll('.btn-shop-now');
    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.shop-card');
            const name = card.querySelector('.product-name').textContent;
            const price = card.querySelector('.price-current').textContent;
            const size = card.querySelector('.size-dropdown span').textContent;

            // Simple visual feedback
            const originalText = btn.textContent;
            btn.textContent = 'ADDED TO BASKET';
            btn.style.backgroundColor = 'var(--color-mocha)';
            btn.style.color = 'var(--color-sand)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 2000);

            console.log(`Add to cart: ${name} (${size}) at ${price}`);
        });
    });
});
