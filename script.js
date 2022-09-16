let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classlist.toggle('active');
 	searchForm.classlist.remove('active');
 	cartItem.classlist.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classlist.toggle('active');
	navbar.classlist.remove('active');
 	cartItem.classlist.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
	cartItem.classlist.toggle('active');
	navbar.classlist.remove('active');
 	searchForm.classlist.remove('active');
}
 
 window.onscroll = () =>{
 	navbar.classlist.remove('active');
 	searchForm.classlist.remove('active');
 	cartItem.classlist.remove('active');
 }