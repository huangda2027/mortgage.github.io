var string = document.getElementsByTagName('tag')[0].getAttribute("id");
var tmplate, datajson, one;
axios.get('../ejs/passage.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
}).catch(err => {
    console.log(err);
})

axios.get('../json/knowledge.json').then(res => {
    console.log(res.data);
    datajson = res.data;
    var html = ejs.render(tmplate, { passage: datajson.passage, tag: string });
    document.getElementById("details").innerHTML = html;
}).catch(err => {
    console.log(err);
})
alert(string);