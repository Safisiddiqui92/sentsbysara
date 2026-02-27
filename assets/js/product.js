/* =========================================================================
   SCENTS BY SARA - PRODUCT PAGE LOGIC
   Handles:
   - Quantity Selector
   - Color Swatches (Large)
   - Pill Button Selectors (Shape, Scent)
   - Accordion Toggle
   - Gallery Thumbnail Swap
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Gallery Thumbnail Logic --- */
    const thumbnails = document.querySelectorAll('.thumb-wrap');
    const mainImage = document.querySelector('.main-image-wrap img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            const newSrc = thumb.querySelector('img').src;
            if (mainImage) mainImage.src = newSrc;
        });
    });

    /* --- Color Swatches --- */
    const lgSwatches = document.querySelectorAll('.swatch-lg');
    const colorLabel = document.querySelector('.selector-group:first-of-type .selector-label');

    lgSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            lgSwatches.forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');

            // Update Label
            if (colorLabel) {
                const color = swatch.classList.contains('swatch-tan') ? 'CARAMEL' :
                    swatch.classList.contains('swatch-white') ? 'IVORY' : 'EBONY';
                colorLabel.textContent = `COLOUR : ${color}`;
            }
        });
    });

    /* --- Pill Selectors (Shape, Scent) --- */
    const pillGroups = document.querySelectorAll('.pill-group');
    pillGroups.forEach(group => {
        const pills = group.querySelectorAll('.pill-btn');
        const label = group.closest('.selector-group').querySelector('.selector-label');
        const labelPrefix = label ? label.textContent.split(':')[0] : '';

        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('selected'));
                pill.classList.add('selected');

                if (label) {
                    label.textContent = `${labelPrefix}: ${pill.textContent}`;
                }
            });
        });
    });

    /* --- Quantity Selector --- */
    const qtyInput = document.querySelector('.qty-input');
    const qtyBtns = document.querySelectorAll('.qty-btn');

    if (qtyInput && qtyBtns.length > 0) {
        qtyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let currentVal = parseInt(qtyInput.value);
                if (btn.textContent === '+') {
                    qtyInput.value = currentVal + 1;
                } else if (currentVal > 1) {
                    qtyInput.value = currentVal - 1;
                }
                updateAddButtonText();
            });
        });
    }

    function updateAddButtonText() {
        const addBtn = document.querySelector('.btn-add-bag');
        if (addBtn && qtyInput) {
            const price = 20.26;
            const total = (price * parseInt(qtyInput.value)).toFixed(2);
            addBtn.textContent = `ADD TO BAG - £${total}`;
        }
    }

    /* --- Accordions --- */
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Close others
            accordions.forEach(other => {
                if (other !== acc) other.classList.remove('active');
            });
            // Toggle current
            acc.classList.toggle('active');
        });
    });

    /* --- Add to Bag Interaction --- */
    const addBagBtn = document.querySelector('.btn-add-bag');
    if (addBagBtn) {
        addBagBtn.addEventListener('click', () => {
            const originalText = addBagBtn.textContent;
            addBagBtn.textContent = 'ADDED TO BAG';
            addBagBtn.classList.add('success');

            setTimeout(() => {
                addBagBtn.textContent = originalText;
                addBagBtn.classList.remove('success');
            }, 2000);
        });
    }
});
