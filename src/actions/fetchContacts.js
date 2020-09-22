export default function() {


  fetch('http://localhost:3000/api/v1/contacts')
  .then(resp => resp.json())
  .then(data => console.log(data))

}
