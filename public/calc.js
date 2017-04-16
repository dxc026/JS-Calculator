$(document).ready(function(){
console.log('loaded key');
config();
});

var config = function() {

var $div = $('<div style="border: black, 2px, solid">');
  $('body').append($div);

var $table = $('<table>');


var $tr1 = $('<tr>');
var $tr2 = $('<tr>');
var $tr3 = $('<tr>');
var $tr4 = $('<tr>');
var $tr5 = $('<tr>');
var $tr6 = $('<tr>');
//Row1

var $td0 = $('<td>');
  $td0.attr('id', 'display');
  $tr1.append($td0);
  var $input0 = $('<input>');
    $input0.attr('type', 'text');
    $input0.attr('name', 'display');
    $td0.append($input0);


//Row2
var $td2 = $('<td>');
  $td2.attr('id','clear');

var $input1 = $('<input>');
    $input1.attr('type', 'submit');
    $input1.attr('value', 'Clear');
    $input1.attr('name', 'clear');
    $td2.append($input1);

var $td1 = $('<td>');

  $tr2.append($td1, $td2);

var $input2 = $('<input>');
  $input2.addClass('operator');
  $input2.attr('type', 'submit');
  $input2.attr('value', '/');
  $input2.attr('name', 'divide')
  $td1.append($input2);

//Row3
var $td3 = $('<td>');

var $input3 = $('<input>');
$input3.addClass('operator');
  $input3.attr('type', 'submit');
  $input3.attr('value','*');
  $input3.attr('name', 'mult');
  $td3.append($input3);

var $td4 = $('<td>');

  var $input4 = $('<input>');
    $input4.addClass('number');
    $input4.attr('type', 'submit');
    $input4.attr('value','7');
    $input4.attr('name', 'seven');

    $td4.append($input4);

var $td5 = $('<td>');

  var $input5 = $('<input>');
  $input5.addClass('number');
    $input5.attr('type', 'submit');
    $input5.attr('value','8');
    $input5.attr('name', 'eight');
    $td5.append($input5);

var $td6 = $('<td>');
  $tr3.append($td3, $td4, $td5, $td6);
  var $input6 = $('<input>');
    $input6.addClass('number');
    $input6.attr('type', 'submit');
    $input6.attr('value','9');
    $input6.attr('name', 'nine');
    $td6.append($input6);

//Row4

var $td7 = $('<td>');

var $input7 = $('<input>');
  $input7.addClass('operator');
  $input7.attr('type', 'submit');
  $input7.attr('value','-');
  $input7.attr('name', 'minus');
  $td7.append($input7);

var $td8 = $('<td>');

  var $input8 = $('<input>');
  $input8.addClass('number');
    $input8.attr('type', 'submit');
    $input8.attr('value','4');
    $input8.attr('name', 'four');
    $td8.append($input8);

var $td9 = $('<td>');

  var $input9 = $('<input>');
  $input9.addClass('number');
    $input9.attr('type', 'submit');
    $input9.attr('value','5');
    $input9.attr('name', 'five');
    $td9.append($input9);

var $td10 = $('<td>');
  $tr4.append($td7, $td8, $td9, $td10);
  var $input10 = $('<input>');
  $input10.addClass('number');
    $input10.attr('type', 'submit');
    $input10.attr('value','6');
    $input10.attr('name', 'six');
    $td10.append($input10);

//Row5
var $td11 = $('<td>');

var $input11 = $('<input>');
$input11.addClass('operator');
  $input11.attr('type', 'submit');
  $input11.attr('value','+');
  $input11.attr('name', 'plus')
  $td11.append($input11);

var $td12 = $('<td>');

  var $input12 = $('<button>1</button>');
  $input12.addClass('number');
    $input12.attr('type', 'submit');
    $input12.attr('value','1');
    $input12.attr('name', 'one');
    $td12.append($input12);

var $td13 = $('<td>');

  var $input13 = $('<input>');
  $input13.addClass('number');
    $input13.attr('type', 'submit');
    $input13.attr('value','2');
    $input13.attr('name', 'two');
    $td13.append($input13);

var $td14 = $('<td>');

  $tr5.append($td11, $td12, $td13, $td14);
  var $input14 = $('<input>');
  $input14.addClass('number');
    $input14.attr('type', 'submit');
    $input14.attr('value','3');
    $input14.attr('name', 'three');
    $td14.append($input14);
// Row6

var $td15 = $('<td>');
  $td15.attr('id','sum');
  var $input15 = $('<input>');
    $input15.attr('type', 'submit');
    $input15.attr('value','=');
    $input15.attr('name', 'equals');
    $td15.append($input15);

var $td16 = $('<td>');


  var $input16 = $('<input>');
  $input16.addClass('number');
    $input16.attr('type', 'submit');
    $input16.attr('value','0');
    $input16.attr('name', 'zero');
    $td16.append($input16);
    $tr6.append($td15, $td16);

$table.append($tr1,$tr2,$tr3,$tr4,$tr5,$tr6);
$div.append($table);

var numOne = '';
var numTwo = '';
var operator = '';



$('.number').click(function(){
  console.log("test");
    console.log($(this).val());
    console.log($(this).value);
    if($input0.val()==='+' || $input0.val()==='-' || $input0.val()==='*' || $input0.val()==='/'){

      $input0.attr('value', $(this).val());
     }
     else{

        $input0.attr('value', $input0.val() + $(this).val());
     }
    });

    $('.number').keydown(function(){
      console.log("test");
        console.log($(this).val());
        console.log($(this).value);
        if($input0.val()==='+' || $input0.val()==='-' || $input0.val()==='*' || $input0.val()==='/'){

          $input0.attr('value', $(this).val());
         }
         else{

            $input0.attr('value', $input0.val() + $(this).val());
         }
        });

$('#sum').click(function(){
  numTwo = $input0.val();
  if(numOne!=='' && operator!=='' && numTwo !== ''){
  console.log("test");

    console.log('numOne ' + numOne);
    console.log('operator ' + operator);
    console.log('numOne ' + numTwo);
    if(operator==='*'){
      var total = numOne * numTwo;
      $input0.attr('value', total);
    }
    if(operator==='/'){
      var total = numOne / numTwo;
      $input0.attr('value', total);
    }
    if(operator==='-'){
      var total = numOne - numTwo;
      $input0.attr('value', total);
    }
    if(operator==='+'){
      var total = parseInt(numOne) + parseInt(numTwo);
      $input0.attr('value', total);
    }
    numOne = '';
    operator = '';
    numTwo = '';

}
    });

$('.operator').click(function(){
  if($input0.val()!==''){
  console.log("test");
    console.log($(this).val());
    console.log($(this).value);
    numOne = $input0.val();
    operator = $(this).val();
    console.log('test');
    console.log('numOne ' + numOne);
    console.log('operator ' + operator);
       $input0.attr('value', $(this).val());
     }
    });

    $('.number').keydown(function(){
      console.log("test");
        console.log($(this).val());
        console.log($(this).value);
           $input0.attr('value', $(this).val());
        });


$('#clear').click(function(){

var clear = '';
$input0.attr('value', clear);

});











};
