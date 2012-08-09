function expandDiv(index) {
    var eles = $(".unit-div");
    var i = 0;
    var originalHeight = "3em";
    var expandedHeight = "23.3em";

    if (eles[index].style.height === originalHeight) {
        eles[index].style.height = expandedHeight;
        eles[index].style.overflowX = "auto";
        eles[index].style.overflowY = "auto";
        eles[index].style.overflow = "auto";
    } else if (eles[index].style.height !== originalHeight) {
        eles[index].style.height = originalHeight;
        eles[index].scrollTop = 0;
        eles[index].style.overflowX = "hidden";
        eles[index].style.overflowY = "hidden";
        eles[index].style.overflow = "hidden";
    }

    while (i < eles.length) {
        if (i !== index) {
            if (eles[i].style.height !== originalHeight) {
                eles[i].style.height = originalHeight;
                eles[i].scrollTop = 0;
                eles[i].style.overflowX = "hidden";
                eles[i].style.overflowY = "hidden";
                eles[i].style.overflow = "hidden";
            }
        }
        i++;
    }
}