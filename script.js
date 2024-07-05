document.getElementById("addTaskBtn").addEventListener("click", taskAddtoList);

        function taskAddtoList() {
            let userInput = document.getElementById("inputBar").value.trim();
            if (userInput) {
                let userList = document.getElementById("inputListToShowTask");
                userList.innerHTML += `<li class="list-group-item mt-3 d-flex justify-content-between align-items-center">
                    ${userInput}
                    <button type="button" class="btn btn-outline-danger btn-sm ml-2 removeTaskBtn">Remove</button>
                </li>`;
                document.getElementById("inputBar").value = "";

                // Add event listeners to each remove button using forEach
                let removeBtns = document.getElementsByClassName("removeTaskBtn");
                Array.from(removeBtns).forEach(btn => {
                    btn.addEventListener("click", function() {
                        if (confirm("Are you sure you want to remove it?")) {
                            this.parentElement.remove(); 
                        }
                    });
                });
            } else {
                alert("Please fill the task bar.");
            }
        }