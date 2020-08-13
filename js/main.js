window.onload = function() {
    let listItem = this.document.querySelectorAll('#navbar-list li')
    for (i = 0; i < listItem.length; i++) {
        listItem[i].onclick = function closeMenu() {
            document.getElementById("check").checked = false;
        }
    }
}
