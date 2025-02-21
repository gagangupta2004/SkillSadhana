function openModal() {
    document.getElementById("courseModal").style.display = "flex";
  }
  function closeModal() {
    document.getElementById("courseModal").style.display = "none";
  }

  document
    .getElementById("courseForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let courseName = document.getElementById("courseName").value;
      let courseDescription =
        document.getElementById("courseDescription").value;
      let startDate = document.getElementById("startDate").value;

      if (courseName && courseDescription && startDate) {
        let table = document.getElementById("courses");
        let row = table.insertRow();
        row.innerHTML = `<td>${courseName}</td><td>${courseDescription}</td><td>${startDate}</td><td>Active</td><td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>`;

        document.getElementById("courseForm").reset();
        closeModal();
      }
    });