                    /*  Lab 4 Task to implement JS OOP  */

/// 1) Using Constructor Function
///Constructors are functions that contain a this keyword.

// function Human(name, money,sleepMode, health){
//     this.name = name;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.health = health;
// }

// Object.assign(Human.prototype,{
//     Sleep(hours){
//         if(hours == 7)
//         {
//         this.sleepMode = "Happy";
//         }else if(hours < 7){
//             this.sleepMode = "tired";
//         }else if( hours > 7)
//         {
//             this.sleepMode = "lazy";
//         }
//     },
//     Eat(meals){
//         if(meals = 3){
//             this.health = "health rate 100";
//         }else if(meals = 2){
//             this.health = "health rate 75";
//         }else if(meals == 1){
//             this.health = "health rate 50";
//         }
//     },
//     Buy(items){
//         for(let i = 0; i < items; i++)
//         {
//             this.money -= 10;
//         }
//     }
// });

// const shehab = new Human("Shehab Hossam", 1000, "tired", "health rate 50");
// console.log(shehab);

// shehab.Sleep(7);
// shehab.Eat(3);
// shehab.Buy(50);
// console.log(shehab);


//////////////////////////////////////////////////////////////////////////////
/// 2) Using Classes

// class Human {
//     constructor(name, money, sleepMode, health) {
//         this.name = name;
//         this.money = money;
//         this.sleepMode = sleepMode;
//         this.health = health;
//     }
//         Sleep(hours) {
//             if (hours == 7) {
//                 this.sleepMode = "Happy";
//             } else if (hours < 7) {
//                 this.sleepMode = "tired";
//             } else if (hours > 7) {
//                 this.sleepMode = "lazy";
//             }
//         }
//         Eat(meals) {
//             if (meals = 3) {
//                 this.health = "health rate 100";
//             } else if (meals = 2) {
//                 this.health = "health rate 75";
//             } else if (meals == 1) {
//                 this.health = "health rate 50";
//             }
//         }
//         Buy(items) {
//             for (let i = 0; i < items; i++) {
//                 this.money -= 10;
//             }
//         }
// }

// const shehab = new Human("Shehab Hossam", 1000, "tired", "health rate 50");
// console.log(shehab);

// shehab.Sleep(7);
// shehab.Eat(3);
// shehab.Buy(50);
// console.log(shehab);


//////////////////////////////////////////////////////////////////////////////
/// 3) Using Linking to Other Objects (OLOO)
// you define the blueprint as a normal object.
// You then use a method (often named init,
// but that isn’t required in the way constructor is to a Class)
// to initialize the instance.
/* 
NOTES:
1) Use Object.create to make an instance
2) Run init function
*/


// const Human = {
//     init(name, money, sleepMode, health) {
//         this.name = name;
//         this.money = money;
//         this.sleepMode = sleepMode;
//         this.health = health;

//         return this;
//     },
//     Sleep(hours) {
//         if (hours == 7) {
//             this.sleepMode = "Happy";
//         } else if (hours < 7) {
//             this.sleepMode = "tired";
//         } else if (hours > 7) {
//             this.sleepMode = "lazy";
//         }
//         return this;
//     },
//     Eat(meals) {
//         if (meals = 3) {
//             this.health = "health rate 100";
//         } else if (meals = 2) {
//             this.health = "health rate 75";
//         } else if (meals == 1) {
//             this.health = "health rate 50";
//         }
//     },
//     Buy(items) {
//         for (let i = 0; i < items; i++) {
//             this.money -= 10;
//         }
//     }
// }

// const shehab = Object.create(Human).init("Shehab Hossam", 1000, "tired", "health rate 50");
// console.log(shehab);

// shehab.Sleep(7);
// shehab.Eat(3);
// shehab.Buy(50);
// console.log(shehab);


//////////////////////////////////////////////////////////////////////////////
/// 4) Using Factory functions
/*
Factory functions are functions that return an object.
You can return any object. You can even return
a Class instance or OLOO instance — and it’ll still be a valid Factory function.
*/

function Human(name, money, sleepMode, health){
    return{
        name,
        money,
        sleepMode,
        health,
        Sleep(hours) {
            if (hours == 7) {
                this.sleepMode = "Happy";
            } else if (hours < 7) {
                this.sleepMode = "tired";
            } else if (hours > 7) {
                this.sleepMode = "lazy";
            }
            return this;
        },
        Eat(meals) {
            if (meals = 3) {
                this.health = "health rate 100";
            } else if (meals = 2) {
                this.health = "health rate 75";
            } else if (meals == 1) {
                this.health = "health rate 50";
            }
        },
        Buy(items) {
            for (let i = 0; i < items; i++) {
                this.money -= 10;
            }
        }
    }
}

const shehab = Human("Shehab Hossam", 1000, "tired", "health rate 50");
console.log(shehab);

shehab.Sleep(7);
shehab.Eat(3);
shehab.Buy(50);
console.log(shehab);