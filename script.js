const search = document.querySelector("#filterInput");
const names = document.querySelector("#names")

search.addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();
    console.log(input);

   const list = names.querySelectorAll("li")
   console.log(list)

   list.forEach((item) => {
   const actualListTitle = item.innerText
   console.log(actualListTitle);
   console.log(list);

   if (actualListTitle.toLowerCase().indexOf(input) !== -1) {
    item.style.display = ""
   } else {
    item.style.display = "none"
   }
 }) 
})
      