(() => {
    const slots = document.querySelectorAll('.slot');
    const content = document.querySelector('.detail-content');
    const time = content.querySelector('.detail-time');
    const title = content.querySelector('.detail-title');
    const desc = content.querySelector('.detail-desc');

    let timer;

    function select(slot) {
        if (slot.classList.contains('is-active')) return;

        slots.forEach(s => {
            const on = s === slot;
            s.classList.toggle('is-active', on);
            s.setAttribute('aria-selected', on);
        });

        clearTimeout(timer);
        content.classList.add('is-swapping');
        timer = setTimeout(() => {
            time.textContent = slot.dataset.time;
            title.textContent = slot.dataset.title;
            desc.textContent = slot.dataset.desc;
            content.classList.remove('is-swapping');
        }, 180);
    }

    slots.forEach(slot => slot.addEventListener('click', () => select(slot)));
})();