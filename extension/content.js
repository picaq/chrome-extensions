let url1 = window.location.href;    
// space delimit = "%20";
// let text = window.getSelection().toString();

let selected = window.getSelection().toString();
// let button = document.getElementById("highlight");

hi(selected);

function hi(text) {
//      text = text.replace(/\,/g, "%2C");
    if ( text != "" ) {
        let arr = text.split(",");
        let words = text.split(" ").length;

        let first = arr[0].split(" ");
        let last = arr[arr.length - 1].split(" ");
        
        let first5 = first.slice(0, 5);
        let last5 = last.slice(-5);
        let textMut;

        if ( words <= 5 ) {
        textMut = first5.join(" ");
        }
        else if ( words > 5 && words < 10 ) {
            let diff = words - first5.length;
            let lastLast = last5.slice(-diff);
            textMut = first5.join(" ") + "," + lastLast.join(" ");
        }
    
        else {
            textMut = first5.join(" ") + "," + last5.join(" ");
        }
    
        let encoded = encodeURI(textMut);
        let url2  = `${url1}#:~:text=${encoded}`;
        window.location.href = url2;
        dum(url2);
        return url2;
    }
    else if ( text = "" ) {
        dum(url1);
        return url1;        
    }
}

function dum(x) {    
    let dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = x;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}