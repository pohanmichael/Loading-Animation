let tempLiteral = (e) => `<span>${e}</span>`;

(function animate() {
    const getPHTML = document.querySelector("p.loading");
    let valuePHTML = getPHTML.innerText.split("");
    looping(getPHTML, valuePHTML);
})();

function looping (getphtml, listdata) {
    let i = 0;
    let counter = 1;
    if (listdata.length == 0){
        console.log("ksong");
        return;
    }
    setInterval(() => {
        let valueTempPHTML = [...listdata];
        valueTempPHTML[i] = tempLiteral(valueTempPHTML[i]);
        getphtml.innerHTML = valueTempPHTML.join("");
        counter++;
        i++;
        if (i == listdata.length) {
            i = 0;
        }
    }, 1000 * counter);
}



// valuePHTML.forEach(function (item, i) {
//     setTimeout(() => {
//         let valueTempPHTML = [...valuePHTML];
//         valueTempPHTML[i] = tempLiteral(item);
//         getPHTML.innerHTML = valueTempPHTML.join("");
//     }, 1000 * (i));
// });