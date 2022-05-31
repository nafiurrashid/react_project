/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 export const updateTable = (JSONDATA) => {
    let jsonData = localStorage.getItem("data");
    if (jsonData) {
      jsonData = JSON.parse(jsonData);
      localStorage.setItem("data", JSON.stringify(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(JSONDATA));
    }
  };
  export const setAvailability = (JSONDATA, value) => {
    let jsonData = localStorage.getItem("data");
    if (jsonData) {
      jsonData = JSON.parse(jsonData);
  
      jsonData.map((data) => {
        if (data.code === value.code) {
          data.availability = false;
        }
        return 0;
      });
      localStorage.setItem("data", JSON.stringify(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(JSONDATA));
    }
  };
  
  export const setMileageandAvailability = (JSONDATA, value, input) => {
    let jsonData = localStorage.getItem("data");
    if (jsonData) {
      jsonData = JSON.parse(jsonData);
      jsonData.map((data) => {
        if (data.code === value.code) {
          data.availability = true;
          data.mileage = input;
        }
        return 0;
      });
      localStorage.setItem("data", JSON.stringify(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(JSONDATA));
    }
  };
  