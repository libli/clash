let args = getArgs();
let requestUrl = `https://api.64clouds.com/v1/getServiceInfo?veid=${args.veid}&api_key=${args.api_key}`;

$httpClient.get(requestUrl, function(error, response, data){
    // 解析 JSON 数据
    let jsonData = JSON.parse(data);

    let nodeIp = jsonData.node_ip;
    let os = jsonData.os;
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