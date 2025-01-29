const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation.json')
      .then(response => response.json())
      .then(data => {
        const item = data[Object.keys(data).find(item => item.toLowerCase().includes(input))];
        
        if (item) {
            let name1;
            let imageUrl1;
            let description1;
            let name2;
            let imageUrl2;
            let description2;
            let time1
            let time2
            if(item[0].name != "Australia"){  
                const options1 = { timeZone: `${item[0].timeZone}`, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                time1 = new Date().toLocaleTimeString('en-US', options1);
                const options2 = { timeZone: item[1].timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                time2 = new Date().toLocaleTimeString('en-US', options2);
                name1 = item[0].name;
                imageUrl1 = item[0].imageUrl;
                description1 = item[0].description;

                name2 = item[1].name;
                imageUrl2 = item[1].imageUrl;
                description2 = item[1].description;
            } else{const options1 = { timeZone: item[0].cities[0].timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                time1 = new Date().toLocaleTimeString('en-US', options1);
                const options2 = { timeZone: item[1].cities[0].timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                time2 = new Date().toLocaleTimeString('en-US', options2);
                
                name1 = item[0].cities[0].name;
                imageUrl1 = item[0].cities[0].imageUrl;
                description1 = item[0].cities[0].description;

                name2 = item[1].cities[0].name;
                imageUrl2 = item[1].cities[0].imageUrl;
                description2 = item[1].cities[0].description;
            }

          resultDiv.innerHTML += `<img src="${imageUrl1}" alt="hjh">`;
          resultDiv.innerHTML += `<h2>${name1}</h2>`;          
          resultDiv.innerHTML += `<p>${description1}</p>`;
          resultDiv.innerHTML += `<p>Current time: ${time1}</p>`;
          resultDiv.innerHTML += `</br></br>=`
          resultDiv.innerHTML += `<img src="${imageUrl2}" alt="hjh">`;
          resultDiv.innerHTML += `<h2>${name2}</h2>`;          
          resultDiv.innerHTML += `<p>${description2}</p>`;
          resultDiv.innerHTML += `<p>Current Time: ${time2}</p>`;

        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  btnSearch.addEventListener('click', searchCondition);
  btnClear.addEventListener('click', clearCondition);

  function clearCondition(){
    document.getElementById('result').innerHTML = ""
  }