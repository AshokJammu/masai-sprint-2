var multiplication1 = 0
var multiplication2 = 0
var multiplication3 = 0
var tax =1
var total =0
var totalBill1 =0
var taxBill = 0

// item 1 bill
function idleyBill(){
    var input1 = document.getElementById("num1").value 
    var input2 = document.getElementById("num2").value
     multiplication1 = input1*input2
    console.log(multiplication1)
    document.getElementById("exponentResult").innerHTML = multiplication1
   // document.getElementById("dosaBill").innerHTML = multiplication
}

// item 2 bill
function dosaBill(){
    var input1 = document.getElementById("num3").value 
    var input2 = document.getElementById("num4").value
     multiplication2 = input1*input2
    console.log(multiplication2)
    //document.getElementById("exponentResult").innerHTML = multiplication
    document.getElementById("dosaBill").innerHTML = multiplication2
}

// item 3 bill
function puriBill(){
    var input1 = document.getElementById("num5").value 
    var input2 = document.getElementById("num6").value
    multiplication3 = input1*input2
    console.log(multiplication3)
    //document.getElementById("exponentResult").innerHTML = multiplication
    document.getElementById("puriBill").innerHTML = multiplication3
}

// total bill and adding tax
function totalBill() {
    var tax = document.getElementById("tax").value
    //var total = multiplication1 + multiplication2 + multiplication3
    var taxBill = (multiplication1 + multiplication2 + multiplication3)/tax
    var totalBill1 = multiplication1 + multiplication2 + multiplication3 + taxBill
    document.getElementById("totalBill").innerHTML = totalBill1 
   // document.getElementById("toalBill")
}

function receiptBill(){
   // var receipt = document.getElementById("receipt").value
    document.getElementById("receiptBill").innerHTML = "Idley" + multiplication1 + "Dosa" + multiplication2 + "Puri" + multiplication3 + " = " + totalBill1

}

// Adding Discount
function discount(){
    var tax = document.getElementById("tax").value
    //var total = multiplication1 + multiplication2 + multiplication3
    var taxBill = (multiplication1 + multiplication2 + multiplication3)/tax
    var totalBill1 = multiplication1 + multiplication2 + multiplication3 + taxBill
    
    var input = document.getElementById("selectDiscount").value
    var input0 = document.getElementById("none").value
    var input1 = document.getElementById("sunSpecial").value
    var input2 = document.getElementById("famSpecial").value
    var input3 = document.getElementById("bdaySpecial").value
    var input4 = document.getElementById("fridayFun").value    
    //console.log(input)
   // console.log(input1)
   if(input == input0){
        document.getElementById("totalBill").innerHTML = totalBill1
   }
    else if(input == input1){
        console.log(totalBill1)
      var sunday = totalBill1/10
      var sundayDiscount = totalBill1 - sunday
      document.getElementById("totalBill").innerHTML = sundayDiscount

    }
    else if(input == input2){
        var family = totalBill1/15
        var familyDiscount = totalBill1 - family
        document.getElementById("totalBill").innerHTML = familyDiscount
    }
    else if(input == input3){
        var bday = totalBill1/20
        var bdaySpecial = totalBill1 - bday
        document.getElementById("totalBill").innerHTML = bdaySpecial
    }
    else if(input == input4){
        // console.log(input4)
        // console.log(input)
        var friFun = totalBill1/18
        var fridayFun = totalBill1 - friFun
        document.getElementById("totalBill").innerHTML = fridayFun
    }
    else{
        document.getElementById("totalBill").innerHTML = totalBill1
    }
}





