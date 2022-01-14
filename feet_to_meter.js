function ftm(feet){
    feet = parseInt(document.getElementById("f").value);
    let meter;
    meter = 0.305 * feet;
    document.getElementById("resultm").innerText= meter + " meter"

}
function mtf(meter){
    meter = parseInt(document.getElementById("m").value);
    let feet;
    feet = 3.279 * meter;
    document.getElementById("resultf").innerText= feet + " feet"
}
