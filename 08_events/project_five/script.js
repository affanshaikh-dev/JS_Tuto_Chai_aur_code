let insert = document.querySelector("#insert")


window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
            <div>
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Key Code</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <td>${e.key}</td>
                        <td>${e.keyCode}</td>
                        <td>${e.code}</td>
                    </tr>
                </table>
            </div>
        `
})