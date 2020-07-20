var user = {};
[user['firstName'],user.lastname] = "Pankaj Kumar".split(" ");

console.log(user)

let obj = {
	name : "Pankaj Kumar",
	age : 30
}
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))

let guest = "Guest";
let admin = "Admin";

//let guest = "Guest"
//let admin = "Admin"
 //Note : use like this give error that code demands semicolons at last

[guest,admin] = [admin,guest]

console.log(admin)
console.log(guest)

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)

let options = {
	title: "Menu",
	width: 100,
	height: 200
};
let {width: w, height: h, title} = options;  

console.log(w)
console.log(h)
console.log(title)

let options2 = {
	title: "Menu2"
};

let {width2 = 100, height2 = 200, title:title2} = options2;

console.log(width2);
console.log(height2)
console.log(title2)

let arr = ["item1","item2","item3"];
arr['name'] = "Pankaj Kumar";
arr['age'] = 36;
arr['gender']= "male";
console.log(arr)

let [item1,...rest] = arr;
console.log(item1)
console.log(rest)

let {name, age, gender}  = arr
console.log(name)
console.log(age)
console.log(gender)

function f() {
	return [1, 2, 3];
  }
  
  const [a, , b] = f();

  console.log(a)
  console.log(b)