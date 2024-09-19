document.getElementById('btn-add-money').addEventListener('click', function(event){

    event.preventDefault()
    
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('add-input-pin').value;

 console.log(addMoney, pinNumber)

 //wrong way to verify pin
 if(pinNumber === '1234'){
   const balance = document.getElementById('account-balance').innerText;
   const balanceNumber = parseFloat(balance);
   const updateBalance = balanceNumber + addMoneyNumber;
   document.getElementById('account-balance').innerText = updateBalance;

 }else{
    alert('wrong information')
 }


})