/* write a function that accepts such list and print the following 2 reports

Report 1. Total vaccination done - city wise. city with highest vaccination should appear first For example.
    ahmedabad => 4
    surat => 3
    vadodara => 1
    mumbai => 1

(If there are 2 cities with same records, for example - vadodara and mumbai,
 Then you can print them in any order)
 
 Report 2. Total vaccination done - year & month wise. Year month with highest vaccination should appear first
  2020-08 => 4
  2021-01 => 3
  2020-12 => 1
  2020-11 => 1

(Here 2020-11 & 2020-12 has same number of vaccinations, so you can print them in any order) */

import { list } from "./data.js";

// --------------------------------------Report-1--------------------------------

function getVaccinationReportOne(list) {
  const cityCount = {};

  list.forEach((data) => {
    const city = data.center.split("|")[1].trim().toLowerCase();
    cityCount[city] = (cityCount[city] || 0) + 1;
  });

  const sortedCities = Object.entries(cityCount).sort((a, b) => b[1] - a[1]);

  sortedCities.forEach(([city, count]) => {
    console.log(`${city} => ${count}`);
  });
}

console.log("----------Report-1----------");
getVaccinationReportOne(list);

// --------------------------------------Report-2--------------------------------

function getVaccinationReportTwo(list) {
  const yearMonthCount = {};

  list.forEach((data) => {
    const dataDate = data.date.slice(0, 7);
    yearMonthCount[dataDate] = (yearMonthCount[dataDate] || 0) + 1;
  });

  const sortedDate = Object.entries(yearMonthCount).sort((a, b) => b[1] - a[1]);

  sortedDate.forEach(([date, count]) => {
    console.log(`${date} => ${count}`);
  });
}

console.log("----------Report-2----------");
getVaccinationReportTwo(list);

/* Report 3. Total vaccination done - city wise and centre wise. 
city with highest vaccination should appear first. 
centres with in that city with highest vaccination should appear first. */

function getVaccinationReportThree(list) {
  const cityData = {};

  list.forEach((data) => {
    const [center, city] = data.center
      .split("|")
      .map((x) => x.trim().toLowerCase());

    if (!cityData[city]) {
      cityData[city] = { total: 0, centers: {} };
    }

    cityData[city].total += 1;
    cityData[city].centers[center] = (cityData[city].centers[center] || 0) + 1;
  });

  const sortedCities = Object.entries(cityData).sort(
    (a, b) => b[1].total - a[1].total
  );

  sortedCities.forEach(([city, data]) => {
    console.log(`${city} => ${data.total}`);

    const sortedCenters = Object.entries(data.centers).sort(
      (a, b) => b[1] - a[1]
    );

    sortedCenters.forEach(([center, count]) => {
      console.log(`   ${center} => ${count}`);
    });
  });
}

getVaccinationReportThree(list);

document.getElementById("idOne").innerText = "Hello world !";
document.getElementById("btn").addEventListener("click", function () {
  alert("Button is clicked!");
});
document.getElementsByClassName("green").style.backgroundColor = "green";

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("promise fulfilled");
    } else {
      reject("promise rejected");
    }
  }, 3000);
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
