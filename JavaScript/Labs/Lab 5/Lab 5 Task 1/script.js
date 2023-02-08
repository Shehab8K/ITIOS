class Person {
    constructor(name,age, money =1000, sleepMode="Happy", health="health rate 100") {
        this.name = name;
        this.age = age;
        this.money = money;
        this.sleepMode = sleepMode;
        this.health = health;
    }
        Sleep(hours) {
            if (hours == 7) {
                this.sleepMode = "Happy";
            } else if (hours < 7) {
                this.sleepMode = "tired";
            } else if (hours > 7) {
                this.sleepMode = "lazy";
            }
        }
        Eat(meals) {
            if (meals = 3) {
                this.health = "health rate 100";
            } else if (meals = 2) {
                this.health = "health rate 75";
            } else if (meals == 1) {
                this.health = "health rate 50";
            }
        }
        Buy(items) {
            for (let i = 0; i < items; i++) {
                this.money -= 10;
            }
        }
}

class Employee extends Person {
    static #myid = 0;
     constructor(name,age, money,email, salary, isManager,sleepMode="Happy", health="health rate 100",workMode = "happy"){
        super (name,age, money, sleepMode, health);
        this.id = this.constructor.incID();
        this.email = email;
        this.workMode = workMode;
        this.salary = salary;
        this.isManager = isManager;
    }

    static incID (){
        this.#myid++;
        return this.#myid;
    }
    Work(hours){
        if(hours == 8){
            this.workMode = "Happy";
        }else if(hours>8){
            this.workMode = "tired";
        }else if(hours < 8){
            this.workMode = "Lazy";
        }
    }

    Salary(sal){
        if(sal<1000)
        { this.salary = 1000; }
    }

    Healthmode(healthRate){
        if(healthRate<0)
        { this.health = "health rate" + 0; 
        }else if(healthRate > 100){
            this.health = "health rate" + 100;
        }else{
            this.health = "health rate" + healthRate;
        }
    }
}

class Office{
    constructor(name,employees){
        this.name = name;
        this.employees = employees;
    }

    GetAllEmps(){
        // this.employees.forEach(e => {
        //  alert("ID: "+id+'\n'+"Name: "+e.name +'\n'+"Age: "+ e.age+'\n' +"Money: "+ e.money+'\n' +"Sleep: " + e.sleepMode+'\n'+"Health: "+ e.health+'\n' +"Email: "+ e.email +'\n'+"Work: "+ e.workMode +'\n'+"Salary: "+ e.salary+'\n' +"Manager: "+ e.isManager);    
        //  });
        return this.employees;
    }

    GetEmp(id){
        let found = "Employee Not found";
        // for(let i = 0; i<this.employees.length; i++)
        // {
        //     if(id == this.employees[i].id)
        //     {
        //         if(this.employees[i].isManager)
        //         {
        //             found = {
        //                 id : this.employees[i].id,
        //                 name : this.employees[i].name,
        //                 age : this.employees[i].age,
        //                 money : this.employees[i].money,
        //                 sleepMode : this.employees[i].sleepMode,
        //                 health : this.employees[i].health,
        //                 email : this.employees[i].email,
        //                 workMode : this.employees[i].workMode,
        //                 isManager : this.employees[i].isManager,
        //             }
        //         }else{
        //         found = this.employees[i];
        //         }
        //         break;
        //     }
        // }
        for(let i = 0; i<this.employees.length; i++)
        {
            if(id == this.employees[i].id)
            {
                found = this.employees[i];
                break;
            } 
        }
        return found;
    }
    Hire(emp){
        let msg;
        let checked = true;
        for(let i = 0; i<this.employees.length; i++)
        {
            if(emp.id == this.employees[i].id)
            {
                checked = false;
                break;
            } 
        }
        if(checked)
        {
            this.employees.push(emp);
            msg = "Added Successfully";
        }else{
            msg = "Sorry! this employee is already hired";
        }
        return msg;     
    }
    Fire(id){
        let checked = -1;
        for(let i = 0; i<this.employees.length; i++)
        {
            if(id == this.employees[i].id)
            {
                checked = i;
                break;
            } 
        }
        if(checked != -1)
        {
            this.employees.splice(checked,1);
            return "Employee removed";
        }else{
            return "Employee isn't hired NOT FOUND";
        }
    }
}


var myEmps = [];
const office = new Office("Google",myEmps);
let input;
let condition = true;
input = prompt("please enter q when you want to exit");
do{
input = prompt("Enter '\n'hire to add employee'\n'fire to remove employee'\n'get to get employee by id'\n'getall to get all employees");
if(input == "q" || input == "Q")
{
    condition = false;
    break;
}
switch(input)
{
    case "hire":
       let emp = {};
    //    emp.id = Number(prompt("Please enter ID (number only)"));
       emp.name = prompt("please enter employee name");
       emp.age = Number(prompt("Please enter age (number only)"));
       emp.money = Number(prompt("Please enter money (number only)"));
       let sleep = Number(prompt("Please enter number of sleeping hours (numbers only)"));
       let meals = Number(prompt("Please enter number of meals (numbers only)"));
       let working = Number(prompt("Please enter number of working hours (numbers only)"));
       emp.email = prompt("please enter employee email");
       emp.salary = Number(prompt("Please enter salary (number only)"));
       emp.isManager = confirm("is this employee a Manager ?")
       let myEmp = new Employee(emp.name, emp.age, emp.money, emp.email, emp.salary, emp.isManager);
       myEmp.Eat(meals);
       myEmp.Sleep(sleep);
       myEmp.Work(working);
       let mymsg = office.Hire(myEmp);
       alert(mymsg);
     break;

     case "fire":
      let id = Number(prompt("Please enter ID (number only)"));
      let msg = office.Fire(id);
      alert(msg);
     break;

     case "get":
        let getid = Number(prompt("Please enter ID (number only)"));
        let e = office.GetEmp(getid);
        if(!e.isManager && e.id)
        {
            alert("ID: "+e.id+'\n'+"Name: "+e.name +'\n'+"Age: "+ e.age+'\n' +"Money: "+ e.money+'\n' +"Sleep: " + e.sleepMode+'\n'+"Health: "+ e.health+'\n' +"Email: "+ e.email +'\n'+"Work: "+ e.workMode +'\n'+"Salary: "+ e.salary+'\n' +"Manager: "+ e.isManager);
        }else if(e.isManager){
            alert("ID: "+e.id+'\n'+"Name: "+e.name +'\n'+"Age: "+ e.age+'\n' +"Money: "+ e.money+'\n' +"Sleep: " + e.sleepMode+'\n'+"Health: "+ e.health+'\n' +"Email: "+ e.email +'\n'+"Work: "+ e.workMode +'\n' +"Manager: "+ e.isManager);
        }else{
            alert(e);
        }
     break;

     case "getall":
        let myemplos = office.GetAllEmps();
         myemplos.forEach(e => {
            if(!e.isManager)
            {
                alert("ID: "+e.id+'\n'+"Name: "+e.name +'\n'+"Age: "+ e.age+'\n' +"Money: "+ e.money+'\n' +"Sleep: " + e.sleepMode+'\n'+"Health: "+ e.health+'\n' +"Email: "+ e.email +'\n'+"Work: "+ e.workMode +'\n'+"Salary: "+ e.salary+'\n' +"Manager: "+ e.isManager);
            }else{
                alert("ID: "+e.id+'\n'+"Name: "+e.name +'\n'+"Age: "+ e.age+'\n' +"Money: "+ e.money+'\n' +"Sleep: " + e.sleepMode+'\n'+"Health: "+ e.health+'\n' +"Email: "+ e.email +'\n'+"Work: "+ e.workMode +'\n' +"Manager: "+ e.isManager);
            }    
         });
     break;

    default:
      alert("wrong operation");
    break;
}
}while(condition);

// const shehab1 = new Employee("ahmed",25,15000,"sleepy","healthy","email","work",2000,true);
// const shehab2 = new Employee("shehab",25,15000,"sleepy","healthy","email","work",2000,"yes manager");
// const shehab3 = new Employee("mostafa",25,15000,"sleepy","healthy","email","work",2000,"yes manager");
// const shehab4 = new Employee("ziad",25,15000,"sleepy","healthy","email","work",2000,"yes manager");

// console.log(shehab1);
// console.log(shehab2);
// console.log(shehab3);
// console.log(shehab4);

// let mmm = office.Hire(shehab1);
// mmm = office.Hire(shehab2);
// mmm = office.Hire(shehab3);
// mmm = office.Hire(shehab4);


// let testt = office.Fire(3);
// console.log(testt);
// let all = office.GetAllEmps();
// console.log(all)