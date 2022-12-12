async function load_script(name){
    // window.location.href="./pl.html#pl="+name;
    
	window.msgs.innerHTML="正在 注入"+name;

    await sleep(1500);
	await run_PL(name);
    jb=1;
	poc();
};
async function load_jb(){
    pl_ver=document.getElementById("oneclick").value;
	window.msgs.innerHTML="正在执行 漏洞利用.<br>成功后 如提示内存不足,请无视.";

    // window.location.href="./pl.html#pl="+pl_ver;
    await sleep(800);
	await run_PL(pl_ver);

    jb=0;
	poc();

};
async function load_jb2(){
    window.msgs.innerHTML="正在执行 漏洞利用.<br>成功后 如提示内存不足,请无视.";
    await sleep(500);
    await run_PL2('ghen2');
    jb=0;
    poc();

};
function change_oneclick(idx,name,val){
    document.getElementById(idx).innerHTML=name;
    document.getElementById(idx).value=val;
    localStorage.setItem(idx+"Name", name);
    localStorage.setItem(idx+"VAL", val);
    return;
};

// var pl_name = getHashParams()['pl'];

async function getfile(path) {
    var file = await fetch(path);
    if(file.ok){
        data = await file.arrayBuffer();
        return data;
    }
    return ''
}


const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});
pl_buf=null;
async function run_PL(pl_name){
    var payload = await getfile("./pl/"+pl_name+".bin");
    var pl_s = await new Response(payload).arrayBuffer();
    pl_buf = new Uint32Array(pl_s);
    if(pl_name=='fan-threshold'){
        let degree=window.degree.value;
        window.pl_buf[1860] = degree;
    }
}
async function run_PL2(pl_name){
    var payload = await getfile("../pl/"+pl_name+".bin");
    var pl_s = await new Response(payload).arrayBuffer();
    pl_buf = new Uint32Array(pl_s);
}

