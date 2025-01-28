const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation.json')
      .then(response => response.json())
      .then(data => {
        const item = data[Object.keys(data).find(item => item.toLowerCase().includes(input))];
        console.log(item)

        
        if (item) {
          const name1 = item[0].name;
          const imageUrl1 = item[0].imageUrl;
          const description1 = item[0].description;

          const name2 = item[1].name;
          const imageUrl2 = item[1].imageUrl;
          const description2 = item[1].description;

          resultDiv.innerHTML += `<img src="${name1}" alt="hjh">`;
          resultDiv.innerHTML += `<h2>${imageUrl1}</h2>`;          
          resultDiv.innerHTML += `<p>${description1}</p>`;
          resultDiv.innerHTML += `</br></br></br>`
          resultDiv.innerHTML += `<img src="${name2}" alt="hjh">`;
          resultDiv.innerHTML += `<h2>${imageUrl2}</h2>`;          
          resultDiv.innerHTML += `<p>${description2}</p>`;

        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
    btnSearch.addEventListener('click', searchCondition);