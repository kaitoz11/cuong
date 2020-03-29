function func(num) {
    var stry;
    switch(num) {
        case 1:
            stry = '<p class="size4" style="text-align: center;">Mong các bạn đợi Cường viết xong....</p>';
            break;
        case 2:
            stry = "";
            break;
        case 3:
            stry = "";
            break;
        case 4:
            stry = "";
            break;
        case 5:
            stry = "";
            break;       
        default:
            stry = '<p style="text-align: center;">Story</p>';
    };
    document.getElementById("story").innerHTML = stry;
}

