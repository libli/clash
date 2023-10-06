let args = getArgs();
let requestUrl = `https://api.64clouds.com/v1/getServiceInfo?veid=${args.veid}&api_key=${args.api_key}`;

$httpClient.get(requestUrl, function(error, response, data){
    // 解析 JSON 数据
    let jsonData = JSON.parse(data);

    let nodeIp = jsonData.node_ip;
    let os = jsonData.os;

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    hour = hour > 9 ? hour : "0" + hour;
    minutes = minutes > 9 ? minutes : "0" + minutes;

    $done({
        title: `Bandwagon VPS Info | ${hour}:${minutes}`,
        content: `Node IP: ${nodeIp}\nOS: ${os}`,
        icon: "server.rack",
        "icon-color": "#3498db",
    });
});

function getArgs() {
    return Object.fromEntries(
        $argument
            .split("&")
            .map((item) => item.split("="))
    );
}