const shopping=document.querySelector(".shopping");
const shop_cashier=document.querySelector(".shop_cashier");
const seeProduct=document.querySelectorAll(".seeProduct");
const singleP=document.querySelector(".single_product");
const close=document.querySelectorAll(".close");
shopping.addEventListener("click",()=>{
  shop_cashier.classList.toggle('hiddenClass'); 
});
seeProduct.forEach(item =>{ 
   item.addEventListener("click",()=>{
    singleP.classList.remove("hide");
});
});
close.forEach(item =>{ 
   item.addEventListener("click",()=>{
   singleP.classList.add("hide");
});
});