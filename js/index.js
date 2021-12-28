var tmplate, datajson, one;
axios.get('./ejs/show.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
}).catch(err => {
    console.log(err);
})

axios.get('./json/show.json').then(res => {
    console.log(res.data);
    datajson = res.data;
    var html = ejs.render(tmplate, { information: datajson.information, });
    document.getElementById("showdiv").innerHTML = html;
}).catch(err => {
    console.log(err);
})