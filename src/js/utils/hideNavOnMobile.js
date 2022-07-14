const viewport = window.visualViewport;
const viewportHeight = viewport.height;

const hideNavOnMobile = (isFocused) => {
    const nav = document.querySelector('nav');

    window.visualViewport.addEventListener('resize', () => {
        const newViewportHeight = viewport.height;

        isFocused
            ? nav?.classList.replace('fixed', 'hidden')
            : nav?.classList.replace('hidden', 'fixed');

        if (viewportHeight == newViewportHeight && isFocused)
            nav?.classList.replace('hidden', 'fixed');
    });

    return;
};

export default hideNavOnMobile;
