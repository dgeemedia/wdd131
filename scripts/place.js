/******************************************************
 * place.js
 * 
 * 1) Sets footer year and last modified
 * 2) Calculates wind chill (if conditions are met)
 ******************************************************/

window.addEventListener("load", () => {
    setFooterInfo();
    calculateAndDisplayWindChill();
  });
  
  /** Sets the current year and last modified date in the footer. 
  function setFooterInfo() {
    const yearSpan = document.getElementById("currentYear");
    const modSpan = document.getElementById("lastModified");
  
    // Current year
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  
    // Last modified
    modSpan.textContent = document.lastModified;
  } */

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
  
  /** Calculate wind chill factor in Celsius, if conditions are met. */
  function calculateAndDisplayWindChill() {
    // get temperature (°C) and wind speed (km/h) from DOM
    const temp = parseFloat(document.getElementById("tempValue").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeedValue").textContent);
  
    let windChillDisplay = "N/A";
  
    // Conditions for wind chill in metric:
    // temp <= 10°C and wind speed > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
      const wc = calculateWindChill(temp, windSpeed);
      windChillDisplay = wc.toFixed(1) + "°C";
    }
  
    // Display in DOM
    document.getElementById("windChillValue").textContent = windChillDisplay;
  }
  
  /**
   * Returns the wind chill in °C given temperature (°C) and wind speed (km/h).
   * Example formula for wind chill in Celsius:
   * windChill = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T V^0.16
   */
  function calculateWindChill(tempC, windKmH) {
    const windExp = Math.pow(windKmH, 0.16);
    const wc = 13.12 + 0.6215 * tempC - 11.37 * windExp + 0.3965 * tempC * windExp;
    return wc;
  }
  