var calculate = document.getElementById("calculate");
calculate.addEventListener("click", calculateAmounts);
var final = document.getElementById("final");

function calculateAmounts(){

    //MONTHLY EXPENSES
    var rent = document.getElementById("rent");
    rentAmount = parseFloat(rent.value);

    var food_1 = document.getElementById("food_1");
    food_1Amount = parseFloat(food_1.value);

    var food_2 = document.getElementById("food_2");
    food_2Amount = parseFloat(food_2.value);

    var food_3 = document.getElementById("food_3");
    food_3Amount = parseFloat(food_3.value);

    var electricityService = document.getElementById("electricityService");
    electricityServiceAmount = parseFloat(electricityService.value);

    var waterService = document.getElementById("waterService");
    waterServiceAmount = parseFloat(waterService.value);

    var drinkingWater = document.getElementById("drinkingWater");
    drinkingWaterAmount = parseFloat(drinkingWater.value);

    var internet = document.getElementById("internet");
    internetAmount = parseFloat(internet.value);

    var other = document.getElementById("other");
    otherAmount = parseFloat(other.value);

    var totalExpenses = rentAmount + food_1Amount + food_2Amount + food_3Amount + electricityServiceAmount + waterServiceAmount + drinkingWaterAmount + internetAmount + otherAmount;
    var totalExpensesFinal = totalExpenses.toFixed(2);

    //INCOME
    var income1 = document.getElementById("income1");
    income1Amount = parseFloat(income1.value);

    var income2 = document.getElementById("income2");
    income2Amount = parseFloat(income2.value);

    var totalIncome = income1Amount + income2Amount;
    var totalIncomeFinal = totalIncome.toFixed(2);

    var percentage1 = ((income1Amount-totalIncome)/totalIncome)*100;
    var percentageincome1 = (100 - Math.abs(percentage1)).toFixed(2);
    var percentageincomeFinal1 = (percentageincome1 / 100);
    var totalIncome1 = totalExpenses * percentageincomeFinal1;
    var finalTotalIncome1 = totalIncome1.toFixed(2);

    var percentage2 = ((income2Amount-totalIncome)/totalIncome)*100;
    var percentageincome2 = (100 - Math.abs(percentage2)).toFixed(2);
    var percentageincomeFinal2 = (percentageincome2 / 100);
    var totalIncome2 = totalExpenses * percentageincomeFinal2;
    var finalTotalIncome2 = totalIncome2.toFixed(2);

    //ALREADY PAID
    var income1Pay = document.getElementById("income1Pay");
    income1PayAmount = parseFloat(income1Pay.value);

    var income2Pay = document.getElementById("income2Pay");
    income2PayAmount = parseFloat(income2Pay.value);

    var totalIncome1pay = (finalTotalIncome1 - income1PayAmount).toFixed(2);

    var totalIncome2pay = (finalTotalIncome2 - income2PayAmount).toFixed(2);


    //calculateAmounts
    final.innerHTML = final.innerHTML + "El total de gastos del mes es $" + totalExpensesFinal + "</br> </br>";
    final.innerHTML = final.innerHTML + "El total de ingresos del mes es $" + totalIncomeFinal + "</br> </br>";
    final.innerHTML = final.innerHTML + "El porcentaje de la persona 1 es de " + percentageincome1 + "%, y deberá aportar $" + finalTotalIncome1 + "</br> </br>";
    final.innerHTML = final.innerHTML + "El porcentaje de la persona 2 es de " + percentageincome2 + "%, y deberá aportar $" + finalTotalIncome2 + "</br> </br>";

    if(totalIncome1pay>=0){
        final.innerHTML = final.innerHTML + "La persona 1 ha aportado " + income1PayAmount + " le falta por aportar " + totalIncome1pay + "$" + "</br> </br>";
    } else {
        totalIncome1pay
        final.innerHTML = final.innerHTML + "La persona 1 ha aportado " + income1PayAmount + " y tiene un saldo a favor de " + Math.abs(totalIncome1pay) + "$" + "</br> </br>";
    }

    if(totalIncome2pay>=0){
        final.innerHTML = final.innerHTML + "La persona 2 ha aportado " + income2PayAmount + " le falta por aportar " + totalIncome2pay + "$" + "</br> </br>";
    } else {
        totalIncome1pay
        final.innerHTML = final.innerHTML + "La persona 2 ha aportado " + income2PayAmount + " y tiene un saldo a favor de " + Math.abs(totalIncome2pay) + "$" + "</br> </br>";
    }

}