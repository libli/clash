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

使用这个固定url:
https://raw.githubusercontent.com/alecthw/mmdb_china_ip_list/release/lite/Country.mmdb

使用Lite版本即可，china_ip_list是ipip.net的数据： https://github.com/17mon/china_ip_list

## OpenClash
openclash 会自动把 rule-providers 中的 http 规则下载，放在/etc/openclash/rule_provider目录下

## 最终逻辑
自定义需要直连的网站，写在 Ruleset/MyDirect.list 中

其它第三方规则，定时运行 Github action，合并到 Merge 文件夹下。

自己编译的 subconverter Docker中，每天定时拉取本仓库，把 Merge 文件夹复制到 rules/myclash/Merge 文件夹下面

ytoo-local.ini 复制到 config/ytoo-local.ini，在 subconverter 的 url 中，&config=config/ytoo-local.ini 即可使用。

ytoo-local.ini 会使用 clash_rule_base=base/MyClashConfig.yml，也是从本仓库复制到 base 文件夹下。