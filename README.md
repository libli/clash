# Clash 订阅转换
## 介绍
将机场提供的订阅 URL，使用 subconverter 进行 proxy_group 和 ruleset 的自定义。

项目依赖如下：

## subconverter
https://github.com/tindy2013/subconverter

使用expand=false，生成的rule-providers中，behavior支持domain , ipcidr  or classical。

https://lancellc.gitbook.io/clash/clash-config-file/rule-provider#example-of-a-rule-provider-file

不要使用classical，这个的时间复杂度是O(n). refer：https://github.com/Dreamacro/clash/issues/422

https://github.com/Dreamacro/clash/issues/1165

## subruleset

由于 subconverter 生成的 RULE-SET 对 ipcidr 的没有添加 no-resolve，造成 DNS 泄露。故开发本服务进行修正。

## GEOIP,CN 规则
Clash使用的是mmdb数据库，默认使用的是： 
https://github.com/Dreamacro/maxmind-geoip

release 地址：
https://github.com/Dreamacro/maxmind-geoip/releases/latest/download/Country.mmdb

优化为使用：
https://github.com/alecthw/mmdb_china_ip_list

release 地址：
https://github.com/alecthw/mmdb_china_ip_list/releases/download/202307310307/Country-lite.mmdb

使用Lite版本即可，china_ip_list是ipip.net的数据： https://github.com/17mon/china_ip_list

## OpenClash
openclash 会自动把 rule-providers 中的 http 规则下载，放在/etc/openclash/rule_provider目录下
