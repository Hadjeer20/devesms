/* Put this file at the project root and add
   <script src="../resize.js"></script> before </body> in every section page
   (Home, About, Teams, Agenda, Contact).
   It tells index.html how tall the page is, so the iframe fits it exactly
   and no inner scrollbar appears. */
(() => {
    if (window.parent === window) return;   // opened on its own: do nothing

    const send = () => {
        window.parent.postMessage(
            { type: 'iframe-height', height: document.documentElement.offsetHeight },
            '*'
        );
    };

    window.addEventListener('load', send);
    window.addEventListener('resize', send);
    new ResizeObserver(send).observe(document.documentElement);
    send();
})();