console.log("loaded")

function youDownloaded(){
  var disable = document.getElementById("headerb")
  disable.disabled = true;
  var secret = document.getElementById("secret")
  secret.innerHTML = "everybody gets one"
}