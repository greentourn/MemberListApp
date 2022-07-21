export default function SynData() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
       var RawData = request.responseText;
       return RawData
    } else {
      console.warn('error');
    }

  };

  request.open('GET', 'https://powerful-reef-47354.herokuapp.com/members');
  request.send();
  
}
