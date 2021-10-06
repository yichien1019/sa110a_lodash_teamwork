# 第二週
* 參考資料 : [BDD/TDD](https://tw.alphacamp.co/blog/bdd-tdd-cucumber-behaviour-driven-development) <br> [tdd -- A Test Framework for Deno](https://deno.land/x/tdd@v0.6)  

## Pull
* 呈現方式 : 用傳統模式書寫  
- 範例: 
 
        var array = ['a', 'b', 'c', 'a', 'b', 'c'];
        
        _.pull(array, 'a', 'c');
        console.log(array);
        // => ['b', 'b']

- 程式碼:

        import _ from "https://dev.jspm.io/lodash";
        var array = ['a', 'b', 'c', 'a', 'b', 'c'];
        _.pull(array, 'a', 'c');
        console.log(array);

- 結果顯示:

<img src="./picture/20210929P1.png" width="500"/>

這個方法是用簡單的方式書寫而成，套用別人的函式把pull用人類看懂的方式寫下來

## PullAll
* 呈現方式 : TDD (先測試在開發)  
- 範例:  

- 程式碼:  

- 結果顯示:  

## PullAllBy
* 呈現方式 : BDD (先開發在測試)  
- 範例:  

- 程式碼:  

- 結果顯示:  
