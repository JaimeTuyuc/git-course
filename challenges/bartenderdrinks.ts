/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(profession: string): string {
  const dictionary: Record<string, string> = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal",
  }
  return dictionary[profession.toLowerCase()] ? dictionary[profession.toLowerCase()] : 'Beer'

}
getDrinkByProfession("jabrOni") //, "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
getDrinkByProfession("scHOOl counselor") //, "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
getDrinkByProfession("prOgramMer") //, "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
getDrinkByProfession("bike ganG member") //, "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
getDrinkByProfession("poLiTiCian") // , "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
getDrinkByProfession("pundit") //, "Beer", "'Pundit' should map to 'Beer'");
























