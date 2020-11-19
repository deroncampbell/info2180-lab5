document.getElementById("lookup").addEventListener("click", myFunction);

function myFunction() {
    var hr = new XMLHttpRequest();
    var url = 'world.php?country=' + document.getElementById('country').value;


    hr.open('GET', url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
        if (hr.readyState == 4 && hr.status == 200) {
            var returndata = hr.responseText;
            document.getElementById('result').innerHTML = returndata;
        }
    };
    hr.send(null);

}