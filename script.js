const search = document.querySelector("#search");
const names = document.querySelector("#names");

search.addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();
    // Log text input and convert to lowercase

   const list = names.querySelectorAll("li");
   // Select all li tags. Selector returns nodelist

   list.forEach((item) => {
   const actualListTitle = item.innerText;
   // Loop through nodelist and assign text content to variable (title)
   
   if (actualListTitle.toLowerCase().indexOf(input) !== -1) {
       item.style.display = "";
    } else {
        item.style.display = "none";
    }
    //Compare input to text to title and display items based on index
 })
});


