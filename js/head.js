var tmplate, datajson, one;

axios.get('./ejs/header.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
    var html = ejs.render(tmplate);
    document.getElementById("head").innerHTML = html;
}).catch(err => {
    console.log(err);
})