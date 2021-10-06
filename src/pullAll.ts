export function pullall(list:any[], rem:any[]) {
    var n = arguments.length;
    if(n <= 1) return arguments;
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < rem.length; j++){
            if(list[i] == rem[j]){
                list.splice(i, 1); 
            }
        }
    }
    return list;
  }

  /*
  上面的splice的功能是把list[i]刪除，1代表你要刪除一個東西。
  如果你寫list.splice(i, 2)代表你要把list[i]和list[i+1]刪掉
  */
