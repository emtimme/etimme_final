// Declare variables
var seedName = [];
var daysToMaturity = [];
var daysBeforeFrost = [];
var lastFrostDate = prompt("Enter the last frost date for your grow zone in MM/DD/YYYY format");
var firstFrostDate = prompt("Enter the first frost date for your grow zone in MM/DD/YYYY format");
var season = prompt("Enter the planting season (spring, summer, winter, fall)");
var keepLooping = true;
var index = 0;
var plantIndoors = "";
var plant = "";
var date = new Date();
var harvestDate = "";
//convert first and last frost input to dates for function
var lastFrostDate = new Date(lastFrostDate);
var firstFrostDate = new Date(firstFrostDate);

// Get the input from the user
while(keepLooping){
    seed = 
       prompt("Enter the seed name. Type done to end");
    if(seed === "done"){
        keepLooping = false;
    }else{
        matureDays = prompt("Enter days to maturity");
        daysBefore = prompt("Enter number of days to plant before first or last frost. Enter 0 if none");
        seedName.push(seed);
        daysToMaturity.push(matureDays);
        daysBeforeFrost.push(daysBefore);
    }
}

//Calculate date to plant or harvest
Date.prototype.addDays = function (days, theDay) {
  let date = new Date(theDay);
  var days = Number(days);
  date.setDate(date.getDate() + days);
  return date.toDateString();
}

//output static information entered by user
document.write("<h2>Planting season: " + season + "</h2>"
+ "<p>Last Frost Date: " + lastFrostDate.toDateString()  + "<br>" + 
" First Frost Date: " + firstFrostDate.toDateString() + "</p><br>");

//output calculated information 
for(var index = 0; index < seedName.length; index++) {
  if((season === "spring" || season === "summer") && daysBeforeFrost[index] != 0) {
    plantIndoors = (date.addDays(-daysBeforeFrost[index], lastFrostDate));
    harvestDate = (date.addDays(daysToMaturity[index], plantIndoors));
    document.write("<h3>Seed: " + seedName[index] + "</h3>");
    document.write("<p><li>Days to maturity: " + daysToMaturity[index] + "<br>");
    document.write("Days to plant before last frost: " + daysBeforeFrost[index] + "<br>");
    document.write("Plant indoors on " + plantIndoors + "<br>");
    document.write("Sow outdoors on " + lastFrostDate.toDateString() + " for a harvest date of " + harvestDate + "</p><br><br>");
  } else if((season === "spring" || season === "summer") && daysBeforeFrost[index] == 0) {
      harvestDate = (date.addDays(daysToMaturity[index], lastFrostDate));
      document.write("<h3>Seed: " + seedName[index] + "</h3>");
      document.write("<p><li>Days to maturity: " + daysToMaturity[index] + "<br>");
      document.write("Sow outdoors on " + lastFrostDate.toDateString() + " for a harvest date of " + harvestDate + "</p><br><br><br>");
  } else if(season === "fall" || season === "winter") {
      plant = (date.addDays(-daysToMaturity[index], firstFrostDate));
      document.write("<h3>Seed: " + seedName[index] + "</h3>");
      document.write("<p>Days to maturity: " + daysToMaturity[index] + "<br>");
      document.write("Plant on " + plant + " for a harvest date of " + firstFrostDate.toDateString() + "</p><br><br>");
  } else {
      alert("Invalid information entered. Please try again");
  }
}

