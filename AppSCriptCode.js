// Get Data

function getDataByEmail(email) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var result = null;
      for(var i = 1; i < data.length; i++) {
        if(data[i][0] == email) {
          result = data[i];
          break;
        }
      }
    return result;
  }
  
  // Login using paramaters
  
  function login(email, password) {
    var data = getDataByEmail(email);
    var error = null;
  
    if(data == null) {
      error = "Email is not registered";
    } else if(data[1] != password) {
      error = "Invalid password";
    }
  
    if(error == null) {
      return {
        status: "Success",
        data: data
      }
    }else {
      return {
        status: "error",
        message: error
      }
    }
  }
  
  // Sign up Account
  
  function signUp(email, password, name) {
    var check = getDataByEmail(email);
      if(check != null) {
        return {
          status: "Error",
          message: "Email already exist"
        }
      } else {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = [[email, password, name]];
        var row = sheet.getLastRow() + 1;
        var col = 1;
        var rowLength = data.length;
        var colLength = data[0].length;
        sheet.getRange(row, col, rowLength, colLength).setValues(data);
        return {
          status: "Success",
          message: "Signup successfully"
        }
      }
  }
  
  // Handle POST request
  
  // function doPost(e) {
  //   var error = null;
  //     if(typeof e.paramater.action == 'undefined') {
  //       error = "Action parameter required";
  //     } else if(e.paramater.action == "login") { // Login process
  //         if(typeof e.paramater.email == 'undefined') {
  //           error = "email required";
  //         } else if(typeof e.paramater.password == 'undefined') {
  //           error = "password required";
  //         } else if(e.paramater.email.trim() == "") {
  //           error = "email couldn't be empty";
  //         } else if(e.paramater.password.trim() == "") {
  //           error = "password couldn't be empty";
  //         } else {
  //           var result = login(e.paramater.email.trim(), e.paramater.password.trim());
  //         }
  //     } else if(e.paramater.action == 'signUp') { // SignUp process
  //       if(typeof e.paramater.email == 'undefined') {
  //           error = "email required";
  //         } else if(typeof e.paramater.password == 'undefined') {
  //           error = "password required";
  //         } else if(typeof e.paramater.name == 'undefined') {
  //           error = "name required";
  //         } else if(e.paramater.email.trim() == "") {
  //           error = "email couldn't be empty";
  //         } else if(e.paramater.password.trim() == "") {
  //           error = "password couldn't be empty";
  //         } else if(e.paramater.name.trim() == "") {
  //           error = "name couldn't be empty";
  //         } else {
  //           var result = signUp(e.paramater.email.trim(), e.paramater.password.trim(), e.paramater.name.trim());
  //         }
  //     } else {
  //       error = "Unknown Action";
  //     }
  
  //     if(error != null) {
  //       var result = {
  //       status: 'error',
  //       message: error
  //       }
  //     }
  
  //     return ContentService.createTextOutput(JSON.stringify(result));
  // }
  
  function doPost(e){
    var error = null;
    if(typeof e.parameter.action == 'undefined'){
      error = "action parameter required";
    }else if(e.parameter.action == "login"){ //LOGIN  PROCCESS
      if(typeof e.parameter.email == 'undefined'){
        error = "email required";
      }else if(typeof e.parameter.password == 'undefined'){
        error = "password required";
      }else if(e.parameter.email.trim() == ""){
        error = "email could not be empty";
      }else if(e.parameter.password.trim() == ""){
        error = "password could not be empty";
      }else{
        var result = login(e.parameter.email.trim(), e.parameter.password.trim());
      }
    }else if(e.parameter.action == "signup"){ //SIGNUP PROCCESS
      if(typeof e.parameter.email == 'undefined'){
        error = "email required";
      }else if(typeof e.parameter.password == 'undefined'){
        error = "password required";
      }else if(typeof e.parameter.name == 'undefined'){
        error = "name required";
      }else if(e.parameter.email.trim() == ""){
        error = "email could not be empty";
      }else if(e.parameter.password.trim() == ""){
        error = "password could not be empty";
      }else if(e.parameter.name.trim() == ""){
        error = "name could not be empty";
      }else{
        var result = signup(e.parameter.email.trim(), e.parameter.password.trim(), e.parameter.name.trim());
      }
    }else{
      error = "unknown action";
    }
  
    if(error != null){
      var result = {
        status: 'error',
        message: error
      }
    }
  
    return ContentService.createTextOutput(JSON.stringify(result));
  }
  
  // Handle Get request
  
  function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Method GET not allowed"
    }))
  }
  
  // Sign in Test
  
  function test(){
    var data = signUp("dummy7@gmail.com", "dummy7", "dummy7");
    Logger.log(JSON.stringify(data));
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  