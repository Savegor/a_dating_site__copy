
export const timeDecoding = (t, format) => {
    var d = new Date(t), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2)
    // const today = new Date(t).toISOString().slice(0, 10)
    const time = new Date(t).toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
    if (format === "onlyTime"){
        return time;
    }
    else if (format === "onlyDate"){
        return dd + "." + mm + "."+ yyyy;
    }
    else{
        return dd + "." + mm + "."+ yyyy + " " + time;
    }
}

export const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}





