  // To check a number or not
  function checkNumber(num){
    let pattern = new RegExp("[0-9]{10}");
    let bool = pattern.test(num);
    // console.log(bool, "regular expression value");
    return bool;
    
  }
  // To check number length
  function checkValidation(value){
    value = value.trim();
    if(value.length == 12){
      if(value.includes("91")){
        let num = value.substr(2);
        if(checkNumber(num))
          return num;
      }
    }
    if(value.length == 13){
      if(value.includes("+91")){
        let num = value.substr(3);
        if(checkNumber(num))
          return num;
      }
    }
    if(value.length == 10){
      if(checkNumber(value))
        return value;
    }
    return false;
  }

  // Add "Click" event listener to the submit button
  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e)=> {

    const value = document.getElementById('inputBox').value;
    const number = checkValidation(value);
    // console.log(number, typeof number);
    if(number){
      location.href = `https://wa.me/91${number}`;
    }else{
      document.getElementById('alert').innerHTML = "Invalid number, Enter a valid number";
    }

  });
 