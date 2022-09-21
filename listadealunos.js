let listaalunos =["Adriano","Felipe","joão","Pedro"]
// console.log(listaalunos.legth)

for (let index = 0; index < listaalunos.length; index++) {
   // const element = array[index]; 
   console.log(index)
   if(index==0) { console.log("zero localizado: " + listaalunos[index])
}
    else if (index %2 !=0) { console.log("numero impar: " + listaalunos[index])
        
    } else {console.log("numero par: " + listaalunos[index])
        
    }
}