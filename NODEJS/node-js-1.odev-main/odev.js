const r = process.argv.slice(2)[0] * 1;
function math(r){
    let alan = Math.PI.toFixed(0)*Math.pow(r,2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
};

math(r);
