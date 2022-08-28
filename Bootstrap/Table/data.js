let emp=[{"id":1,"first_name":"Harald","last_name":"Issitt","email":"hissitt0@marriott.com"},
{"id":2,"first_name":"Brittan","last_name":"Walton","email":"bwalton1@360.cn"},
{"id":3,"first_name":"Edyth","last_name":"Coniff","email":"econiff2@xing.com"},
{"id":4,"first_name":"Angela","last_name":"Calf","email":"acalf3@loc.gov"},
{"id":5,"first_name":"Janot","last_name":"Lock","email":"jlock4@tumblr.com"},
{"id":6,"first_name":"Odelle","last_name":"Hallewell","email":"ohallewell5@chronoengine.com"},
{"id":7,"first_name":"Quintus","last_name":"Bellhouse","email":"qbellhouse6@wufoo.com"},
{"id":8,"first_name":"Christoph","last_name":"Mellem","email":"cmellem7@jugem.jp"},
{"id":9,"first_name":"Josepha","last_name":"Canada","email":"jcanada8@slashdot.org"},
{"id":10,"first_name":"Shepherd","last_name":"Napthine","email":"snapthine9@ed.gov"}]

function get_emp()
{
    let rows=""
    for(e of emp)
    {
        rows=rows+`<tr>
                    <td>${e.id}</td>
                    <td>${e.first_name}</td>
                    <td>${e.last_name}</td>
                    <td>${e.email}</td>
                    </tr>`

    }
    document.getElementById("tb").innerHTML=rows

}