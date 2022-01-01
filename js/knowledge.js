var tmplate, datajson, one;
axios.get('./ejs/yulan.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
}).catch(err => {
    console.log(err);
})

axios.get('./json/knowledge.json').then(res => {
    console.log(res.data);
    datajson = res.data;
    var html = ejs.render(tmplate, { title: datajson.title, content: datajson.content,link: datajson.link});
    document.getElementById("show").innerHTML = html;
}).catch(err => {
    console.log(err);
})

axios.get('./ejs/tag.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
}).catch(err => {
    console.log(err);
})

axios.get('./json/tag.json').then(res => {
    console.log(res.data);
    datajson = res.data;
    var html = ejs.render(tmplate, { information: datajson.information, });
    document.getElementById("sidebar").innerHTML = html;
}).catch(err => {
    console.log(err);
})