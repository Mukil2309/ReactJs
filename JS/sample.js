// // console.log("----------------this is 1 topic-----------------")
// // let d = 120
// // console.log("this is let type:" + d)
// // const e = 120
// // console.log("this is const type:"+""+ e)

// // console.log("----------------this is 2(1) topic------------------")

// // var a = 120
// // console.log("this is Var type:" + a)
// // {
// //     var a = 7
// //     console.log("this is Var type :" + a)
// // }
// // console.log("this is Var type :" + a)

// // console.log("----------------this is 2(2)-----------------")

// // let b = 120
// // console.log("this is Var type:" + b)
// // {
// //     let b = 7
// //     var z = 10
// //     let y = 10
// //     console.log("this is Var type :" + b)
// //     console.log("this is Var type :" + y)
// //     console.log("this is Var type :" + z)
// // }
// // console.log("this is Var type :" + b)


// // const c = 120
// // console.log("this is Var type:" + c)
// // console.log("this is Var type :" + c)


// // console.log("-------------this is 3 topic contion methode----------------")

// // var f = 0;
// // if (f===0){
// //     console.log("this is null :" + f)
// // }
// // else if(f>0){
// //     console.log("this is high :"+ f)
// // }
// // else{
// //     console.log("this is Nagative :"+ f)
// // }


// // console.log("-----------this is 4 topic arthematic method-----------")


// // let  g= 0;
// // if (g===0){
// //     console.log("this is null :" + g)
// //     g = g + 1
// // }
// // if(a>0){
// //     console.log("this is positive :"+ g)
// // }
// // else{
// //     console.log("this is Nagative :"+ g)
// // }

// // console.log("  ")

// // console.log("----------this is 5(1) topic looping(for ,foreach, forin,forof,while,do while,switch)----------")

// // console.log("--------this is 5(2) topic looping(for)----------")


// // // looping ,for ,foreach, forin,forof 
// // h = 5
// // for (i = 0; i<h;i++){
// //     console.log(i)
// // }

// // console.log("-------this is 5(2) topic looping(while)--------")

// // j = 5
// // i = 0
// // while(i <= j){
// //     console.log(i)
// //     i++
// // }

// // console.log("--------this is 5(3) topic looping(foreach)--------")


// // // foreach
// // // this is one line loop or function
// // // => this the syntax is for loop function (for i (in - =>) )
// // k = [10,20]
// // k.forEach(i => {console.log(i)});


// const array = [10,20,"mukil",23.08,Date()]
// console.log("Before change :")
// for (var ele in array){
//     console.log(array[ele])
// }
// console.log("After change :")
// array.push("3 rd years")
// for (var ele in array){
//     console.log(array[ele])
// }
// console.log(array)


// for (var ele of array){
//     console.log(ele)
// }
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()

// console.log("after poping all the elements", array)

// if(array.length > 0){
//     console.log("Elements are the elements")
//     for (var ele of array){
//         console.log(ele)
//     }
// }
// else{
//     console.log("No Elements are in the array")
// }
// array.push(1)
// if (array.length>0){
//     console.log("Elements are present",array)
// }
// else{
//     console.log("No Elements are in the array")
// }



// // Object
// a = {
//     car : "Audi",
//     model : "AB",
//     airbags : 8,
//     wheels : 5,
//     color : "blue"
// }
// console.log(a["car"])
// console.log(a.airbags)
// console.log(a)
// a.car = "BMW"
// console.log(a)
// a.sunroof = "Yes"
// console.log(a)
// a.sunroof =  {
//     ispresent:"Yes",Shape : "Rectangle"
// }
// console.log(a)

// // console.log(a.sunroof.ispresent)

// // for (var ele in a){
// //     console.log(ele,":",a[ele])
// //     // if(ele >= 2){
// //     //     for (var i in a){
// //     //         console.log(ele[i])
// //     //     }
// //     // }
// // }

// // console.log(a.sunroof.ispresent)

// // for (var ele in a){
// //     console.log(ele,":",a[ele])
// //     if(ele >= ){
// //         for (var i in a){
// //             console.log(a[i])
// //         }
// //     }
// // }

// for (var ele in a){
//     console.log(ele,":",a[ele])
//     if(typeof a[ele] === "Object"){
//         for (var val in a[ele]){
//             console.log(val,":",a[ele][val])
//         }
//     }
// }

//  Function 
