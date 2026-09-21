let input_value = document.getElementById("metric-value");
let conversion = document.getElementsByTagName("select")[0];
let convert_button = document.getElementById("convert-btn");
let result = document.getElementById("conversion-result");

convert_button.addEventListener("click", function(event) {
    event.preventDefault();

    let value = parseFloat(input_value.value);
    let conversion_type = conversion.options[conversion.selectedIndex].value;
    let answer;

    if (conversion_type == "inch to centimeter") {
        answer = value * 2.54;
        result.innerHTML = value + " inches is " + answer.toFixed(2) + " centimeters";

    } else if (conversion_type == "foot to centimeter") {
        answer = value * 30.48;
        result.innerHTML = value + " feet is " + answer.toFixed(2) + " centimeters";

    } else if (conversion_type == "yard to meter") {
        answer = value * 0.91;
        result.innerHTML = value + " yards is " + answer.toFixed(2) + " meters";

    } else if (conversion_type == "mile to kilometer") {
        answer = value * 1.61;
        result.innerHTML = value + " miles is " + answer.toFixed(2) + " kilometers";

    } else if (conversion_type == "centimeter to inch") {
        answer = value * 0.39;
        result.innerHTML = value + " centimeters is " + answer.toFixed(2) + " inches";

    } else if (conversion_type == "centimeter to foot") {
        answer = value * 0.0328;
        result.innerHTML = value + " centimeters is " + answer.toFixed(2) + " feet";

    } else if (conversion_type == "meter to yard") {
        answer = value * 1.09;
        result.innerHTML = value + " meters is " + answer.toFixed(2) + " yards";

    } else if (conversion_type == "kilometer to mile") {
        answer = value * 0.62;
        result.innerHTML = value + " kilometers is " + answer.toFixed(2) + " miles";

    } else {
        result.innerHTML = "Invalid conversion";
    }
});