/**
 * Created by user1 on 2014/8/6.
 */
function first(l){
    return l[0];
}
function rest(l){
    return l.slice(1);
}

function mergelist(l1,l2){
    var ret;
    if(l1.length == 0){
        ret = l2;
    }else if(l2.length == 0){
        ret = l1;
    }else if(first(l1)>first(l2)){//将小的放前面
        ret = [].concat(first(l2),
            mergelist(l1,rest(l2)));
    }else{
        ret = [].concat(first(l1),//将小的元素放前面
            mergelist(l2,rest(l1)));
    }
    return ret;
}

function divide(l){
    var len = l.length, mid = Math.floor(len/2);
    return [l.slice(0,mid),l.slice(mid,len)]
}

function mergesort(l1){
    var ab = divide(l1), a = ab[0], b = ab[1];

    if(a.length == 0){
        return b;
    }else if(b.length == 0){
        return a;
    }else if(a.length == 1){
        return [].concat(mergelist(a,mergesort(b)));
    }else if(b.length == 1){
        return [].concat(mergelist(b,mergesort(a)));
    }else{
        return [].concat(mergelist(mergesort(a),mergesort(b)));
    }
}

console.log(mergesort([5,2,3,4]));
console.log(mergesort([5,3,4]));
console.log(mergesort([4,3,5,2,7,8,6,1,0,9]));

