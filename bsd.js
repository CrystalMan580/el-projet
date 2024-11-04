function copyToClipboard(command) {
    const el = document.createElement('textarea');
    el.value = command;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Command copied to clipboard: ' + command);
}
function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("commandsTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td");
        let rowContainsFilter = false;

        for (let j = 0; j < td.length; j++) {
            if (td[j] && td[j].textContent.toLowerCase().indexOf(filter) > -1) {
                rowContainsFilter = true;
            }
        }

        tr[i].style.display = rowContainsFilter ? "" : "none";
    }
}