// function startApp(){
//   const verifyBtn = document.getElementById('verify-btn');
//   const phoneNumber = document.getElementById('phone');
//   const mobileHolder = document.getElementById('mobileoperator');
//   // ******MTN Numbers************
//   const mtnNumbers = ["0702", "0703","0704","0706","0803","0806","0810","0813","0814","0816","0903","0906","0913"]
//   // ******Airtel Numbers*****
//   const airtelNumbers = ["0802","0904", "0808","0701","0708","0901","0812"]
//   // *****Glo Numbers**********
//   const gloNumbers = ['0805','0807','0705','0815','0811','0905']
//   // ******9mobile********
//   const etisalatNumbers = ['0817','0818','0809']

//   let validationList = null

//   const mtnLogo = "https://www.logolynx.com/images/logolynx/58/5851155e37656ef98b095e8517ebb5fc.jpeg"
//   const airtelLogo = "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png"
//   const etisalatLogo = "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png"
//   const gloLogo = "https://www.logolynx.com/images/logolynx/85/85c703ba97ca1bee01c977f59047f67b.jpeg"

//   let numberType = null
//   const result = document.getElementById("result")
//   let logo = null
//   const updateResult =(value)=>{
//       result.innerHTML = `<img src="${value}" />`
//       result.style.visibility = "visible"
//   }
//   // ******Checking the selected network**************
//   const checkNetwork = (e)=>{

//        let currentNetwork = e.target.value
//        if(currentNetwork === "MTN"){
//           validationList = mtnNumbers
//           logo = mtnLogo
//        }else if(currentNetwork === "Airtel"){
//           validationList = airtelNumbers
//           logo = airtelLogo
//        }
//        else if(currentNetwork === "Glo"){
//           validationList = gloNumbers
//           logo = gloLogo
//        }
//        else if(currentNetwork === "9mobile"){
//           validationList = etisalatNumbers
//           logo = etisalatLogo
//        }else{
//           validationList = "all"
//        }

//   }
//   const handleClick = () =>{
//       checkNumber(phoneNumber.value)
//   }
//   const checkNumber = (value)=>{
//       let number = value;
//       if(!validationList){
//           return
//       }
//       if(number.length <= 4)
//           return
//       if(number.slice(0,4) == "+234"){
//           number ="0"+number.slice(4)
//       }

//       const firstFour = number.slice(0,4)
//       if(validationList !== "all"){
//       if(validationList.includes(firstFour)){
//           numberType  = logo;
//           updateResult(numberType)

//       }
//       else{
//           numberType = "INVALID NUMBER OR WRONG NETWORK"
//           result.innerHTML = numberType
//       }
//       }
//       else{
//           allValidate(numberType)
//       }

//   }
//   const allValidate = (firstFour) =>{
//       if(mtnNumbers.includes(firstFour)){
//           numberType  = mtnLogo;
//           updateResult(numberType)
//       }
//       else if(airtelNumbers.includes(firstFour)){
//           numberType = airtelLogo;
//           updateResult(numberType)
//       }
//       else if(gloNumbers.includes(firstFour)){
//           numberType = gloLogo;
//           updateResult(numberType)
//       }
//       else if(etisalatNumbers.includes(firstFour)){
//           numberType = etisalatLogo;
//           updateResult(numberType)
//       }
//       else{
//           numberType = "INVALID"
//           result.innerHTML = numberType
//       }
//   }

//   mobileHolder.addEventListener('change', checkNetwork);
//   verifyBtn.addEventListener('click', handleClick);

// }const verifyBtn = document.getElementById('verify-btn');
// const phoneNumber = document.getElementById('phonenumber');
// const mobileHolder = document.getElementById('mobileoperator');
// // ******MTN Numbers************
// const mtnNumbers = ["0702", "0703","0704","0706","0803","0806","0810","0813","0814","0816","0903","0906","0913"]
// // ******Airtel Numbers*****
// const airtelNumbers = ["0802","0904", "0808","0701","0708","0901","0812"]
// // *****Glo Numbers**********
// const gloNumbers = ['0805','0807','0705','0815','0811','0905']
// // ******9mobile********
// const etisalatNumbers = ['0817','0818','0809']

// let validationList = null

// const mtnLogo = "https://www.logolynx.com/images/logolynx/58/5851155e37656ef98b095e8517ebb5fc.jpeg"
// const airtelLogo = "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png"
// const etisalatLogo = "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png"
// const gloLogo = "https://www.logolynx.com/images/logolynx/85/85c703ba97ca1bee01c977f59047f67b.jpeg"

// let numberType = null
// const result = document.getElementById("result")
// let logo = null
// const updateResult =(value)=>{
//     result.innerHTML = `<img src="${value}" />`
//     result.style.visibility = "visible"
// }
// // ******Checking the selected network**************
// const checkNetwork = (e)=>{

//      let currentNetwork = e.target.value
//      if(currentNetwork === "MTN"){
//         validationList = mtnNumbers
//         logo = mtnLogo
//      }else if(currentNetwork === "Airtel"){
//         validationList = airtelNumbers
//         logo = airtelLogo
//      }
//      else if(currentNetwork === "Glo"){
//         validationList = gloNumbers
//         logo = gloLogo
//      }
//      else if(currentNetwork === "9mobile"){
//         validationList = etisalatNumbers
//         logo = etisalatLogo
//      }else{
//         validationList = "all"
//      }

// }
// const handleClick = () =>{
//     checkNumber(phoneNumber.value)
// }
// const checkNumber = (value)=>{
//     let number = value;
//     if(!validationList){
//         return
//     }
//     if(number.length <= 4)
//         return
//     if(number.slice(0,4) == "+234"){
//         number ="0"+number.slice(4)
//     }

//     const firstFour = number.slice(0,4)
//     if(validationList !== "all"){
//     if(validationList.includes(firstFour)){
//         numberType  = logo;
//         updateResult(numberType)

//     }
//     else{
//         numberType = "INVALID NUMBER OR WRONG NETWORK"
//         result.innerHTML = numberType
//     }
//     }
//     else{
//         allValidate(numberType)
//     }

// }
// const allValidate = (firstFour) =>{
//     if(mtnNumbers.includes(firstFour)){
//         numberType  = mtnLogo;
//         updateResult(numberType)
//     }
//     else if(airtelNumbers.includes(firstFour)){
//         numberType = airtelLogo;
//         updateResult(numberType)
//     }
//     else if(gloNumbers.includes(firstFour)){
//         numberType = gloLogo;
//         updateResult(numberType)
//     }
//     else if(etisalatNumbers.includes(firstFour)){
//         numberType = etisalatLogo;
//         updateResult(numberType)
//     }
//     else{
//         numberType = "INVALID"
//         result.innerHTML = numberType
//     }
// }

// mobileHolder.addEventListener('change', checkNetwork);
// verifyBtn.addEventListener('click', handleClick);
function startApp() {
  const verifyBtn = document.getElementById("verify-btn");
  const phoneNumber = document.getElementById("phone");
  const mobileHolder = document.getElementById("mobileoperator");
  const prefixes = document.querySelectorAll(".prefix-link");
  // ******MTN Numbers************
  const mtnNumbers = [
    "0702",
    "0703",
    "0704",
    "0706",
    "0803",
    "0806",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
    "0913",
  ];
  // ******Airtel Numbers*****
  const airtelNumbers = [
    "0802",
    "0904",
    "0808",
    "0701",
    "0708",
    "0901",
    "0902",
    "0812",
  ];
  // *****Glo Numbers**********
  const gloNumbers = ["0805", "0807", "0705", "0815", "0811", "0905"];
  // ******9mobile********
  const etisalatNumbers = ["0817", "0818", "0809"];

  let validationList = null;

  const mtnLogo =
    "https://www.logolynx.com/images/logolynx/58/5851155e37656ef98b095e8517ebb5fc.jpeg";
  const airtelLogo =
    "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png";
  const etisalatLogo =
    "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png";
  const gloLogo =
    "https://www.logolynx.com/images/logolynx/85/85c703ba97ca1bee01c977f59047f67b.jpeg";

  let numberType = null;
  const result = document.getElementById("result");
  let logo = null;
  const updateResult = (value) => {
    result.innerHTML = `<img src="${value}" />`;
    result.style.visibility = "visible";
  };
   let currentNetwork = null;
  // ******Checking the selected network**************
  let mtnDropdown = document.querySelector(".prefixes");
  const checkNetwork = (e) => {
   currentNetwork = e.target.value;
    if (currentNetwork === "MTN") {
      validationList = mtnNumbers;
      logo = mtnLogo;
    } else if (currentNetwork === "AIRTEL") {
      validationList = airtelNumbers;
      logo = airtelLogo;
    } else if (currentNetwork === "GLO") {
      validationList = gloNumbers;
      logo = gloLogo;
    } else if (currentNetwork === "ETISALAT") {
      validationList = etisalatNumbers;
      logo = etisalatLogo;
    } else {
      validationList = "all";
    }
  };
  const handleClick = () => {
    checkNumber(phoneNumber.value);
  };
  const checkNumber = (value) => {
    let number = value;
    if (!validationList) {
      return;
    }
    if (number.length <= 4) return;
    if (number.slice(0, 4) == "+234") {
      number = "0" + number.slice(4);
    }

    const firstFour = number.slice(0, 4);
    if (validationList !== "all") {
      if (validationList.includes(firstFour)) {
        numberType = logo;
        updateResult(numberType);
      } else {
        numberType = "INVALID NUMBER OR WRONG NETWORK";
        result.innerHTML = numberType;
      }
    } else {
      allValidate(numberType);
    }
  };
  const allValidate = (firstFour) => {
    if (mtnNumbers.includes(firstFour)) {
      numberType = mtnLogo;
      updateResult(numberType);
    } else if (airtelNumbers.includes(firstFour)) {
      numberType = airtelLogo;
      updateResult(numberType);
    } else if (gloNumbers.includes(firstFour)) {
      numberType = gloLogo;
      updateResult(numberType);
    } else if (etisalatNumbers.includes(firstFour)) {
      numberType = etisalatLogo;
      updateResult(numberType);
    } else {
      numberType = "INVALID";
      result.innerHTML = numberType;
    }
  };

  /*
  * Function for when the network is selected
  */
  const handlePrefixClick = (event) => {
    // update the content of the input with the prefix
    phoneNumber.value = event.target.textContent;
    mtnDropdown.style.display = 'none'
  };

  const handlePhoneNumberInput = () => {  
    // get the prefixes for the network that the user selected
    
  
    
    // where is the network that the user selected?
    
    // filter the array of prefixes that match the input
  }

  mobileHolder.addEventListener("change", checkNetwork);
  verifyBtn.addEventListener("click", handleClick);
  prefixes.forEach((prefix) =>
    prefix.addEventListener("click", handlePrefixClick)
  );

//TODO - add an event listener for when the user types into the input
  phoneNumber.addEventListener('keyup', handlePhoneNumberInput)
}



// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
