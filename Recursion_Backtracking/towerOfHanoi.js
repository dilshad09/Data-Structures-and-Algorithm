function TOH(n, from, to, via){
    if(n===0) return;
    TOH(n-1, from, via,to);
    console.log(from, "=>", to, n)
    TOH(n-1, via, to, from)
}

TOH(3, "A","B","C")
