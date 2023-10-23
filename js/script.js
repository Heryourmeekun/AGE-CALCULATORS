// function startCalculations(params) {
//   console.log("loaded");

//   const getDayInput = document.getElementById("day");
//   const getMonthInput = document.getElementById("months");
//   const getYearInput = document.getElementById("years");

//   //   getDayInput.addEventListener("input", (evnt) => {
//   //     console.log(getDayInput.value);
//   //     const invalidText = document.getElementById("invalidday");
//   //     // do validation i.e should be between 1-31
//   //     if (parseInt(getDayInput.value) <= 0 || parseInt(getDayInput.value) > 31) {
//   //       console.log("invalid day");

//   //       invalidText.style.display = "block";
//   //     } else {
//   //       invalidText.style.display = "none";
//   //     }

//   getDayInput.addEventListener("input", (evnt) => {
//     console.log(getDayInput.value);
//     const invalidText = document.getElementById("invalidDay");
//     if (parseInt(getDayInput.value) <= 0 || parseInt(getDayInput.value) > 31) {
//       console.log("invalid day");

//       invalidText.style.display = "block";
//     } else {
//       invalidText.style.display = "none";
//     }
//   });

//   getMonthInput.addEventListener("input", (evnt) => {
//     console.log(getMonthInput.value);
//     const invalidMonth = document.getElementById("invalidmonth");
//     if (
//       parseInt(getMonthInput.value) <= 0 ||
//       parseInt(getMonthInput.value) > 12
//     ) {
//       console.log("invalid Month");
//       invalidMonth.style.display = "block";
//     } else {
//       invalidMonth.style.display = "none";
//     }
//   });

//   getYearInput.addEventListener("input", (evnt) => {
//     console.log(getYearInput.value);
//     const invalidYear = document.getElementById("invalidyear");
//     if (
//       parseInt(getYearInput.value) <= 0 ||
//       parseInt(getYearInput.value) > 2023
//     ) {
//       console.log("invalid Year");
//       invalidYear.style.display = "block";
//     } else {
//       invalidYear.style.display = "none";
//     }
//   });
// }

// let dateOutput = new Date().getDate();
// let monthOutput = new Date().getMonth() + 1;
// let yearOutput = new Date().getYear();

// let actualDate = getDayInput.value - dateOutput;
// let Days = getElementById("days");

// Days.innerText = actualDate;

// let actualMonth = getMonthInput.value - monthOutput;
// let months = getElementById("months");
// months.innerText = actualMonth;

// let actualYear = getYearInput.value - yearOutput;
// let year = getElementById("year");
// year.innerText = actualYear;

// function arrow() {
//   document.getElementsByClassName("arrow").innerHTML = actualDate;
//   console.log("actualDate", actualDate);
// }

function calculateAge() {
  const getDayInput = document.getElementById("day");
  const getMonthInput = document.getElementById("months");
  const getYearInput = document.getElementById("years");

  const day = parseInt(getDayInput.value);
  const month = parseInt(getMonthInput.value);
  const year = parseInt(getYearInput.value);

  const invalidDay = document.getElementById("invalidday");
  const invalidMonth = document.getElementById("invalidmonth");
  const invalidYear = document.getElementById("invalidyear");

  // Reset error messages
  invalidDay.innerText = "";
  invalidMonth.innerText = "";
  invalidYear.innerText = "";

  if (isNaN(day) || day <= 0 || day > 31) {
    invalidDay.innerText = "Invalid Day";
    console.log("invalid day");

    invalidDay.style.display = "block";
    return;
  } else {
    invalidDay.style.display = "none";
  }

  if (isNaN(month) || month <= 0 || month > 12) {
    invalidMonth.innerText = "Invalid Month";
    console.log("invalid day");

    invalidMonth.style.display = "block";
    return;
  } else {
    invalidMonth.style.display = "none";
  }

  if (isNaN(year) || year <= 0 || year > 2023) {
    invalidYear.innerText = "Invalid Year";
    console.log("invalid day");

    invalidYear.style.display = "block";
    return;
  } else {
    invalidYear.style.display = "none";
  }

  // Rest of the age calculation logic
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  const years = Math.floor(ageInYears);
  const remainingMilliseconds =
    ageInMilliseconds - years * (1000 * 60 * 60 * 24 * 365.25);
  const months = Math.floor(
    remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12))
  );
  const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

  document.getElementById("yearOutput").innerText = years + " ";
  document.getElementById("monthOutput").innerText = months + " ";
  document.getElementById("dayOutput").innerText = days + " ";
}
