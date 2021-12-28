var tmplate, datajson, one;

axios.get('./ejs/result.ejs').then(res => {
    console.log(res.data);
    tmplate = res.data;
    var html = ejs.render(tmplate);
    document.getElementById("myresult").innerHTML = html;
}).catch(err => {
    console.log(err);
})