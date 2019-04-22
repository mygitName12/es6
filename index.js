// function sum () {
//  let sumNumber = 0;
//  for (var i = 0; i < arguments.length; i++){
//     sumNumber += arguments[i];
//  }
//  return sumNumber;
// };
//  console.log(sum(1, 2, 3));
//  console.log(sum(1, 2, 3, 4, 5));

// ...运算符  写场景
// function sum (...arg) {
//     let sumNumber = 0;
//     arg.forEach(function (ele) {
//         sumNumber += ele;
//     })
//     return sumNumber;
//     // console.log(arg, arg instanceof Array);
// }
// console.log(sum(1, 3, 4, 5))
// function avearge (...arg) {
//     arg.sort(function (a, b){
//         return a - b;
//     });
//     arg.pop();
//     arg.shift();
//     return computedScore(...arg);
// }


// function computedScore (...arg) {
//     let sum = 0;
//     arg.forEach(function (ele){
//         sum += ele;
//     });
//     return sum / arg.length;
// }
// // console.log(computedScore(1,2,3,4,5,6,6,5,4,43))

// let arr1 = [1, 2, 3, 4];
// let arr2 = [6, 7, 8];
// let newArr = [...arr1,...arr2];
// console.log(newArr);


// //深度克隆 es7内容
// let dempter = { 
//     name : 'zhangkeyi',
//     age : 18
// }

// let  run = {
//     love : 'pink',
//     heigh : 100
// }
// let leader = {
//     name : 'fan',
//     age : 20,
//     run : {
//        ...run
//     }
// }
// // obj.run.heigh = 90;

// // console.log(Object.assign({},run,leader));

// let obj = {
//     ...dempter,
//     ...dempter,
//     run : {
//         ...run
//     }
// }
// obj.run.heigh = 90;
// console.log(obj)


//  2019-4-21 
//解构化赋值

let obj = {
    name : '小明',
    age : 18,
    sex : 'female'
};

// 定义同名变量
// let name , age 

// 会把对应的值传到下面
// ({name, age} = obj);
// console.log(name, age);

//  或者直接赋值
// let {name, age} = obj
// console.log(name, age);

// 与上面对象名不重复  默认赋值  如果上面有sex 则用它的  ，没有则默认自己的
// let { name : oname, age : oage, sex = 'male'} = obj;
// console.log(oname, oage, sex);

// eg
    // function sum (a = 10, b = 20){
    //     return a + b ;
    // }
    // console.log(sum(1, 2))
// 在解构的过程中可以同名，也可以不同名  可以解构对象、数组


// 解构数组

// let  arr = [1, 2, 3, 4, 5];

// // let {0 : x, 1 : y, 2 : z, 3 : g, 4 : f} = arr;// 要对应的添加数组索引才能够对应上
 
// // 也可用数组接受
//  let [x, y, z, g, f] = arr;  //长像相似， 底层也是数组解构
// console.log(x, y, z, g, f);




// let { length} = arr;
// console.log(length)

// 拿出数组中对象的值;
// let arr = [1, 2, 3, {name : '小明'}];
// let [,,,{name}] = arr;
// console.log(name);

// 应用场景，当复杂数据里要分开操作
//   实际开发的例子
// let data  ={filedata:[{
// 	UserId :1001,
// 	UserName : '李连杰',
// 	UserHeader : '../image/liulangnanhai.png'
// 	},{
// 	UserId :1002,
// 	UserName : '李小春',
// 	UserHeader : '../image/liulangnanhai.png'
// 	},{
// 	UserId :1003,
// 	UserName : '张杰',
// 	UserHeader : '../image/liulangnanhai.png'
//     }]
// }
// // og(data);
// let {filedata} = data;
// console.log(filedata[0]);
// // let obj = filedata[0];

// let {UserId, UserName, UserHeader} = filedata[0];
// console.log(UserId, UserName, UserHeader);



//  箭头函数
// es5
// function sum (a, b){
//     return a + b;
// };
// 箭头函数
// let sum = (a, b) => {
//   return a + b;    
// }
// console.log(sum(10, 20))

// 可以省略return  要去除大括号  可以返回数组，对象 返回对象时，要强制变成表达式
// let sum = (a, b) => ({a: a , b: b});
// console.log(sum(12, 12))

// function sum (x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         }
//     }
// }
// var sum1 = sum(1);
// var sum2 = sum1(2);
// console.log(sum2(3)) // or
// console.log(sum(1)(2)(3))


//   let sum = x => y => z => x + y + z;
//   console.log(sum(1)(2)(3))

//   let sum = (x) => {
//       return (y) => {
//           return (z) => {
//               return x + y + z;
//           }
//       }
//   }
//   console.log(sum(1)(2)(3));

// 注意箭头函数里面形参不能重复，重复会报错

// 不能被new ，不是构造函数，没有原型
// let sum = () => {
//     this.a = 10;
// }
// new sum()// 会报错