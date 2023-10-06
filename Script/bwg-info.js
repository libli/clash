$httpClient.get("https://api.64clouds.com/v1/getServiceInfo?veid=1826936&api_key=" + $argument, function(error, response, data){
    $done({
        title: `Bandwagon VPS Info | ${hour}:${minutes}`,
        content: data,
        icon: "server.rack",
        "icon-color": "#3498db",
    });
});