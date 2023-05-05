<script>
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down")}

menuicn.addEventListener("click",()=>
{
	nav.classList.toggle("navclose");
})

</script>
