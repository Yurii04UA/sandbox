// let a = 3;
// let b = 5;
// console.log(a<b);
// console.log(a == b);
// console.log(a != b);

// if(1 < 11) {
// console.log("Yes,<11");
// }
// else{
//     console.log("No,>11");
// }

// let candies = 5;
// while(candies > 0){
//     console.log(`Открыть`);
//     console.log(`Взять`);
//     console.log(`Сьесть`);
//     console.log(`Закрыть`);
//     candies--;
//     console.log(candies);
// }

// for(let i = 0; i<5; i++){
//     console.log(i);
// }

// function NameAge(name,age){
//     if (age >= 18){
//         console.log(name + " Go it");
//     } else {
//         console.log(name + " No go it");
//     }
// }

// NameAge("Yurii",19);
// NameAge("Vita",15);

// const red = document.querySelector('.red');
// red.className = "blue";

// const red = document.querySelector('.red');
// red.classList.add("blue");

const button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log("Клик произошел");
});



let height = 23;
let width = 10;

console.log("Площадь прямоугольника ровна высота*ширину "  +  height*width + " cm");


let s = 4;
let h = 10;

console.log("Обьем цилиндра V ровна h*s и ровна = " + s+h + " куб.м.")



let a = 11;
let b = 18;

if(a == b){
    console.log("yes `a`= `b`")
}else if(a>b){
    console.log("yes a>b")
}else if(a+3>b){
    console.log("yes a+3>b") 
}else{
    console.log("yes,you ##")
}


let number1 = 30;
while (number1  < 40){
    number1++;
    console.log(number1);
}
// while(candies > 0){
//     console.log(`Открыть`);
//     console.log(`Взять`);
//     console.log(`Сьесть`);
//     console.log(`Закрыть`);
//     candies--;
//     console.log(candies);
// }