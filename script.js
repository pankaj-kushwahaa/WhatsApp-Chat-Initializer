// To check only numbers
function checkNumber(num){
  let pattern = new RegExp("[0-9]{10}");
  let bool = pattern.test(num);
  return bool;
}
// To check number length and validation
function checkValidation(value){
  text = value.trim(); // remove extreme left and right space
  value = text.replace(/\s/g, ""); // Remove the extra space in between number
  let len = value.length;
  if(len < 10){
    return false;
  }else if(len > 13){
    return false;
  }else if(len == 11){
    return false;
  }

  let condition = (len == 12) && (value.charAt(0) == "9" && value.charAt(1) == "1");
  if(condition){
      let num = value.substr(2);
      if(checkNumber(num))
        return num;
  }
  condition = (len == 13) && (value.charAt(0) == "+" && value.charAt(1) == "9" && value.charAt(2) == "1");
  if(condition){
      let num = value.substr(3);
      if(checkNumber(num))
        return num;
  }
  condition = len == 10;
  if(condition){
    if(checkNumber(value))
      return value;
  }
  return false;
}

// Add "Click" event listener to the submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', (e)=> {
  const value = document.getElementById('inputBox').value;
  const message = document.getElementById('inputText').value.trim();
  const number = checkValidation(value);
  console.log(number);
  if(number){
    // location.href = `https://wa.me/91${number}`;
    location.href = `https://api.whatsapp.com/send?type=phone_number&app_absent=0&phone=91${number}&text=${message}`;
  }else{
    document.getElementById('alert').innerHTML = "Invalid number, Enter a valid number";
  }

});
 