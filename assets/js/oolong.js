(function () {
    var $navLinks = document.getElementById("nav-links");

    if (window.customLinks) {
        // Append custom links to the header.
        for (var i = 0; i < customLinks.length; i++) {
            var $link = document.createElement("a");
            $link.setAttribute("class", "nav-item is-hidden-mobile");
            $link.href = customLinks[i].url;
            $link.innerHTML = '<span class="icon"><i class="fa ' + customLinks[i].icon + '"></i></span>';
            $navLinks.appendChild($link);
        }
    }
})();
