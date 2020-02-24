//A function named carLoanPayment that has 3 parameters and returns the monthly payment to the main program. 
function carLoan(p, i, n) {
  return p * i / (1 - (Math.pow(1/(1 + i), n)));
  
  }

//A function named homeLoanPayment that has 3 parameters and returns the monthly payment to the main program.
function homeLoan(p, i, n) {
  return p * i / (1 - (Math.pow(1/(1 + i), n)));
  }
  
let newLoan = "Yes"
let choice = " "


let principleOfCar = " "
let interestCar = " "
let monthCar = " "
let interestCarFinal = " "
let carLoanAmount = " "


let principleOfHome = " "
let interestHome = " "
let yearHome = " "
let interestHomeFinal = " "
let yearHomeFinal = " "
let homeLoanAmount = " "
  
while (newLoan == "Yes") {
  
    choice = prompt("Which loan would you like, Home Load or Car Loan?")

   if (choice =='Home' || choice == 'home')  {
      
      principleOfHome = parseInt(prompt(" Enter the principle amount ex: 200000"))
      yearHome = parseInt(prompt("Enter the amount of years of your loan -only 30 or 15  months"))
      interestHome = parseFloat(prompt("Enter the interest in decimal form ex:5.7"))
      interestHomeFinal = interestHome / 1200
      yearHomeFinal = yearHome * 12

      homeLoanAmount = homeLoan(principleOfHome, interestHomeFinal, yearHomeFinal)

      alert(`A home loan for $${principleOfHome}  over ${yearHome} years at ${interestHome}% interest would have a monthly payment of $${homeLoanAmount}`)

    } else if (choice =='Car' || choice == 'car') {

          principleOfCar = parseInt(prompt(" Enter the principle amount ex: 30000"))
          monthOfCar= parseInt(prompt("Enter the amount of months of your loan ex: 60"))
          interestCar = parseFloat(prompt("Enter the interest in decimal form ex:3.2"))
          interestCarFinal = interestCar / 1200

          carLoanAmount = carLoan(principleOfCar, interestCarFinal, monthOfCar)
          
          alert(`A car loan for $${principleOfCar}  over ${monthOfCar} months at ${interestCar}% interest would have a monthly payment of $${carLoanAmount}`)
          
     } else 
          alert("Error, please check your answer")
 
        newLoan = prompt('Do you want to calculate a loan? Yes or No')
        
        
} //ending the loop
alert("Have a good day")