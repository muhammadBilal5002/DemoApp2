function GetCookies(cName){
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split(';');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}
function ClearCookies(){
  document.cookie.split(";")
  .forEach(function(c)
   { document.cookie = c.replace(/^ +/, "").
   replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
   });
}

export  {GetCookies,ClearCookies}