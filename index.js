

//firstly get all buttons and textbox from form

const textbox = document.getElementById('txtnumber');

//function to return result authomatically!!
function reults (){
    if(textbox.innerText ==''){txtresult.innerText = ''}
    else{
        txtresult.innerText = eval(textbox.innerText );
    }
}

//button one
const btn1 = document.getElementById('btnone');
btn1.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn1.innerText;

    reults();
});

//button two
const btn2 = document.getElementById('btntwo');
btn2.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn2.innerText;

    reults();
});


//button three
const btnthree = document.getElementById('btnthree');
btnthree.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btnthree.innerText;
    reults();
});

//button four
const btn4 = document.getElementById('btnfour');
btn4.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn4.innerText;
    reults();
});
//btn five
const btn5 = document.getElementById('btnfive');
btn5.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn5.innerText;
    reults();
});

//btn six
const btn6 = document.getElementById('btnsix');
btn6.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn6.innerText;
    reults();
});

//btn seven
const btn7 = document.getElementById('btnseven');
btn7.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn7.innerText;
    reults();
});

//btn eight
const btn8 = document.getElementById('bnteight');
btn8.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn8.innerText;
    reults();
});

//btnnine
const btn9 = document.getElementById('btnnine');
btn9.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn9.innerText;
    reults();
});

//btnzero
const btn0 = document.getElementById('btnzero');
btn0.addEventListener('click', function(){
    textbox.innerText = textbox.innerText + btn0.innerText;
    reults();
});

//btn minus
const btnminus = document.getElementById('btnminus');
btnminus.addEventListener('click', function(){

    if(textbox.innerText ==''){}
    else{
        var str = String(textbox.innerText);
        var vals = str.charAt(str.length -1);
        if(vals != '-'){
            textbox.innerText = textbox.innerText + btnminus.innerText;
            //reults();
        }

    }
    
    
});

//btn plus
const btnplus = document.getElementById('btnplus');
btnplus.addEventListener('click', function(){
    if(textbox.innerText ==''){}
    else{
        var str = String(textbox.innerText);
        var vals = str.charAt(str.length -1);
        if(vals != '+'){
            textbox.innerText = textbox.innerText + btnplus.innerText;
            //reults();
        }
    }
    
    
});

//btn multiply
const btnmiltiply = document.getElementById('btnmiltiply');
btnmiltiply.addEventListener('click', function(){

    if(textbox.innerText ==''){}
    else{
        var str = String(textbox.innerText);
        var vals = str.charAt(str.length -1);
        if(vals != '*'){
            textbox.innerText = textbox.innerText + btnmiltiply.innerText;
            //reults();
        }
    }
    
    
});


//btn divide
const btndivide = document.getElementById('btndivide');
btndivide.addEventListener('click', function(){
    if(textbox.innerText ==''){}
    else{
        var str = String(textbox.innerText);
        var vals = str.charAt(str.length -1);
        if(vals != '/'){
            textbox.innerText = textbox.innerText + btndivide.innerText;
            //reults();
        }
    }
});


// calculation evaluation
const btnequalto = document.getElementById('btnequalto');
btnequalto.addEventListener('click', function(){

    if(textbox.innerText ==''){txtresult.innerText = ''}
    else{
        textbox.innerText = eval(txtresult.innerText );
        txtresult.innerText='';
    }
});


//delete entry
const del = document.getElementById('btndelete');
del.addEventListener('click', function(){
    const str = textbox.innerText;
    const vals = str.slice(0,-1);
    console.log(vals);
    textbox.innerText = vals;
});