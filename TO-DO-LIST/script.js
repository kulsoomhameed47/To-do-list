function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.querySelector(".list-container");
  
    if (inputBox.value === '') {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.textContent = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = ''; 
    saveData(listContainer);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.querySelector(".list-container");
  
    listContainer.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(listContainer);
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(listContainer);
      }
    }, false);
    showTask(listContainer);
  });
  
  function saveData(listContainer){
    localStorage.setItem("data", listContainer.innerHTML)
  }
  function showTask(listContainer){
    listContainer.innerHTML = localStorage.getItem("data")
  }
  showTask();