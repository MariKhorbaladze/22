/////work 1



const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    
    }
    ];

    const tableContainer = document.createElement("div")
    tableContainer.setAttribute("id","table_container")
    document.body.appendChild(tableContainer)

    const table = document.createElement("table")
    table.setAttribute("id","table_info")
    tableContainer.appendChild(table)
    

    const tableRow = document.createElement("tr")
    tableRow.setAttribute("id","table_row")
    table.appendChild(tableRow)



    const headers = ["ID","Email","First Name","Last Name", "Remove"]

    headers.forEach(headerPlace => {
    const header = document.createElement("th")
    const textNode = document.createTextNode(headerPlace)
    header.appendChild(textNode);
    tableRow.appendChild(header);
    })



    users.forEach(user => {
        const row = document.createElement("tr"); 
    
        Object.values(user).forEach(text => {
            const cell = document.createElement("td");
            const textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
    
        const removeUser = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            table.removeChild(row);
        });
        removeUser.appendChild(deleteButton);
        row.appendChild(removeUser);
        table.appendChild(row); 
    });




    const modalOpen = document.createElement("button")
    const modalContainer = document.getElementById("modal_container")
    const modalAdd = document.getElementById("modal_add")
    const modalClose = document.getElementById("modal_close")
    modalOpen.textContent = "Add"
    modalOpen.setAttribute("id", "open_modal")
    document.body.appendChild(modalOpen)

    modalOpen.addEventListener("click", () => {
        modalContainer.classList.add("show")
    })

    modalClose.addEventListener("click", () => {
        modalContainer.classList.remove("show")
    });

    const modalID = document.getElementById("modal_id")
    const modalEmail = document.getElementById("modal_email")
    const modalFirstName = document.getElementById("modal_first_name")
    const modalLastName = document.getElementById("modal_last_name")
    const modalForm = document.getElementById("modal_form")
    const statusbar = document.createElement("div")


    modalForm.appendChild(statusbar)
    modalForm.addEventListener("submit", (e) => { 
        e.preventDefault()
    })

    try {
        if (modalID.value.length === 0) { 
            modalID.style.border = "2px solid red"
            throw new Error("Enter The ID Number In The Box")
        } else {
          modalID.style.border = "2px solid green"
          statusbar.textContent("ID Number is Valid")
          statusbar.style.color = "green"
       }
        if (modalFirstName.value.length === "") { 
            modalFirstName.style.border = "2px solid red"
            throw new Error("Enter The First Name In The Box")
        } else { 
            modalFirstName.style.border = "2px solid green"
            statusbar.textContent("First Name Is Valid")
            statusbar.textContent.color = "green"

        }

    } catch (e) { 
        statusbar.textContent = e.message
        statusbar.style.color = "red"
    };



    /////////davaleba 2



    const text = (string) => { 
        return new Promise 
    }





    




     








    

    
    