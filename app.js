const billAmount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#Check-button")
const message=document.querySelector("#error-message")
const noOfNotes=document.querySelectorAll("#no-of-notes")
const availableNotes=[2000, 500, 100, 50, 10, 1];
checkButton.addEventListener("click",function validateBillAndCashAmount (){
 hideMessage();

if(billAmount.value> 0){
if ( Number(cashGiven.value )>=Number (billAmount.value) ) {
const amountToBeReturned = cashGiven.value-billAmount.value;
calculateChange(amountToBeReturned);

}else {showMessage(
    "The cash provided must be atleast equal to bill amount."
)


}}
else { 
    showMessage("Please enter the valid amount")
}



});

function calculateChange(amountToBeReturned){
for( i=0;i<availableNotes.length;i++){
    const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
   amountToBeReturned= amountToBeReturned %availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;
}
}

function hideMessage(){
    message.style.display="none"
}

function showMessage (msg){
    message.style.display="block";
    message.innerText = msg;
}














