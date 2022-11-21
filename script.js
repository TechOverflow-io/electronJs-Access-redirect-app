//start button

const { ipcMain, ipcRenderer } = require("electron");

let button = document.querySelector('.btnAccess');

button.addEventListener("click", () => {
  getResponse()
});

const getResponse = async () => {

  console.log('-----------------  in get Response ---------------')
  let inputCode = document.getElementById('inputCode').value ?? document.getElementById('inputCode').innerHTML ?? document.getElementById('inputCode').innerText;

  alert(inputCode)

  let url = 'https://www.newworldapi.com/api/getdata'


  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'institute_code': '789101',
      'authkey': inputCode,
      'client_id': '445566',
      'Accept': '*/*',
    },
  })
  //   .then(response => response.json())
  //   .catch(error => console.log('Error while fetching:', error))

  let data = await response.json()
  console.log(data, 'Url ---->  ', data.data.url)
  ipcRenderer.send('loadUrl', data.data.url);
}
