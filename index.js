// class product{
//     constructor(price,name){
//         this.name = name;
//         this.price = price;
//     }
//     // fn keyword is not needed for fn in class in js
//     displayProduct(){
//         const description = document.querySelector('.idescription');
//         description.innerHTML = `the name of item is ${this.name} and  its value is ${this.price}`;
//     }

//     finalprice(salestax){
//         const fp = document.querySelector('.fp');
//         fp.innerHTML = `the final price is ${(this.price + this.price*salestax).toFixed(2)}`;
//     }
// }

// let tax = 0.1;
// const product1 = new product(455,'jeans');
// product1.displayProduct();
// product1.finalprice(tax);

// const passtoggler = document.querySelector('.passtoggler');
// const password = document.querySelector('#password');
// passtoggler.addEventListener('click', function (event){
//     event.preventDefault();
//     let type = password.getAttribute('type');
//     console.log(type);
//     let newType = '';
//      type === 'password' ? newType = 'text' : newType = 'password';
//     console.log(newType);
//     password.setAttribute('type', newType);
// })

// const file = document.getElementById('file');

// const imagepreviewer = document.getElementById('imagepreviewer');

// file.addEventListener('change' , (event)=>{
//     const  file1 = event.target.files[0];

//     if(file1){
//         const reader = new FileReader();
//         reader.onload = (event)=>{
//             imagepreviewer.src = event.target.result;
//         }
//         reader.readAsDataURL(file1);
//         // imagepreviewer.style.height = '15rem';
//         // imagepreviewer.style.width = '15rem'
//     }
// })

window.addEventListener('scroll', () => {
    console.log('hello')
    const mainHeading = document.querySelector('.MainHeading'); // Adjust class name if needed
    const stickyHeader = document.querySelector('.mainFeature'); // Adjust class name if needed
    
    const scrollPosition = window.scrollY;
    const mainHeadingHeight = mainHeading.offsetHeight;
  
    if (scrollPosition > mainHeadingHeight) {
      stickyHeader.style.transform = `translateY(-${mainHeadingHeight+60}px)`;
    } else {
      stickyHeader.style.transform = 'translateY(0)';
    }
  });