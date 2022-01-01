var tmplate, datajson, one;
axios.get('./ejs/headline.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
}).catch(err => {
    console.log(err);
})

axios.get('./json/headline.json').then(res => {
    console.log(res.data);
    datajson = res.data;
    var html = ejs.render(tmplate, { title: datajson.title, content: datajson.content,link:datajson.link });
    document.getElementById("hotdiv").innerHTML = html;
}).catch(err => {
    console.log(err);
})