55 23 * * * /sbin/reboot

50 23 * * * find /home/data/logs/jd_script_node -name '*.log' | grep -v 'jd_get_share_code.log' | xargs rm -rf
#52 23 * * * find /home/data/KR -name 'Fruit_ShareCache.json' | xargs rm -rf
#52 23 * * * find /root -name 'Fruit_ShareCache.json' | xargs rm -rf

# jdhelloworld
#1 0 * * * /usr/local/bin/node /home/data/jd_scripts/jd_speed_wabao.js >> /home/data/logs/jd_script_node/jd_speed_wabao.log 2>&1
#1 0,12,18 * * * /usr/local/bin/node /home/data/jd_scripts/jd_makemoneyshop_wq.js >> /home/data/logs/jd_script_node/jd_makemoneyshop_wq.log 2>&1
#8 10 * * * /usr/local/bin/node /home/data/jd_scripts/jd_wechat_sign.js >> /home/data/logs/jd_script_node/jd_wechat_sign.log 2>&1
10,45 * * * * /usr/local/bin/node /home/data/jd_scripts/jd_joy_park_run_1.js >> /home/data/logs/jd_script_node/jd_joy_park_run_1.log 2>&1
#10,45 * * * * /usr/local/bin/node /home/data/jd_scripts/jd_joy_park_run.js >> /home/data/logs/jd_script_node/jd_joy_park_run.log 2>&1
#2 7,20 * * * /usr/local/bin/node /home/data/jd_scripts/jd_speed_coin.js >> /home/data/logs/jd_script_node/jd_speed_coin.log 2>&1
#15 0,20 * * * /usr/local/bin/node /home/data/jd_scripts/jd_speed_sign.js >> /home/data/logs/jd_script_node/jd_speed_sign.log 2>&1
#15 0,1 * * * /usr/local/bin/node /home/data/jd_scripts/jd_zjd.js >> /home/data/logs/jd_script_node/jd_zjd.log 2>&1
10 20 * * * /usr/local/bin/node /home/data/jd_scripts/jd_checkCookie.js >> /home/data/logs/jd_script_node/jd_checkCookie.log 2>&1
10 2 * * * /usr/local/bin/node /home/data/jd_scripts/jd_dwapp.js
#2 9,11,14,16,17,18 * * * /usr/local/bin/node /home/data/jd_scripts/jd_cash_wechat.js >> /home/data/logs/jd_script_node/jd_cash_wechat.log 2>&1




# 极速版
2 0,12,18 * * * /usr/local/bin/node /home/data/KR/jd_makemoneyshop.js
1 0 * * * /usr/local/bin/node /home/data/KR/jd_makemoneyshop_reward.js >> /home/data/logs/jd_script_node/jd_makemoneyshop_reward.log 2>&1
20 0,19 * * * /usr/local/bin/node /home/data/KR/jd_js_sign.js
0 7 * * * /usr/local/bin/node /home/data/KR/jd_zjb.js
45 0 * * * /usr/local/bin/node /home/data/KR/jd_yqyl.js
30 0-23/3 * * * /usr/local/bin/node /home/data/KR/jd_wsdlb.js
0 1 * * * /usr/local/bin/node /home/data/KR/jd_tyt.js
#3 0,19 * * * /usr/local/bin/node /home/data/KR/jd_speed_redpocke.js
11 23 * * * /usr/local/bin/node /home/data/KR/jd_joypark_task.js


# 京喜
1 0,1,20 * * * /usr/local/bin/node /home/data/KR/jx_sign.js
13 11,20 * * * /usr/local/bin/node /home/data/KR/jd_jx_sign.js

# 京东
#11 1,20 * * * /usr/local/bin/node /home/data/KR/jd_cash_windfg.js
2 9,22 * * * /usr/local/bin/node /home/data/KR/jd_cash_nolan.js
10 9,12,16,20,23 * * * /usr/local/bin/node /home/data/KR/jd_bean_change_pro.js
23 1,6,15,21 * * * /usr/local/bin/node /home/data/KR/jd_bean_home.js
6 23 * * * /usr/local/bin/node /home/data/KR/jd_bean_info.js
0 0,18 * * * /usr/local/bin/node /home/data/KR/jd_bean_sign.js
20 14 * * * /usr/local/bin/node /home/data/KR/jd_beauty.js
10 0,5 * * * /usr/local/bin/node /home/data/KR/jd_cash_wx.js
6 0,16,22 * * * /usr/local/bin/node /home/data/KR/jd_club_lottery.js
18 7,18 * * * /usr/local/bin/node /home/data/KR/jd_ddnc_farmpark.js
13 0,20 * * * /usr/local/bin/node /home/data/KR/jd_dpqd.js
13 7 * * * /usr/local/bin/node /home/data/KR/jd_dwapp.js
10 1,16 * * * /usr/local/bin/node /home/data/KR/jd_fruit_help.js
10 10,15 * * * /usr/local/bin/node /home/data/KR/jd_fruit_friend.js
5 5-18/6 * * * /usr/local/bin/node /home/data/KR/jd_fruit_task.js >> /home/data/logs/jd_script_node/jd_fruit_task.log 2>&1
3 1,11 * * * /usr/local/bin/node /home/data/KR/jd_m_sign.js
2 6 * * 5 /usr/local/bin/node /home/data/KR/jd_xs_zzl.js
18 0,2,20 * * * /usr/local/bin/node /home/data/KR/jd_wish.js
18 21 * * * /usr/local/bin/node /home/data/KR/jd_unsubscriLive.js
38 21 * * * /usr/local/bin/node /home/data/KR/jd_unsubscribe.js
4 10,18,20 * * * /usr/local/bin/node /home/data/KR/jd_superBrandJK.js
35 10,18,20 * * * /usr/local/bin/node /home/data/KR/jd_superBrand.js
3 8,17 * * * /usr/local/bin/node /home/data/KR/jd_sign_graphics.js
38 9,22 * * * /usr/local/bin/node /home/data/KR/jd_sign.js
25 4,21 * * * /usr/local/bin/node /home/data/KR/jd_sgmh.js
25 0,23 * * * /usr/local/bin/node /home/data/KR/jd_price.js >> /home/data/logs/jd_script_node/jd_price.log 2>&1
20 2-21/2 * * * /usr/local/bin/node /home/data/KR/jd_plantBean.js
5 2,18 * * * /usr/local/bin/node /home/data/KR/jd_plantBean_help.js
10 0 * * * /usr/local/bin/node /home/data/KR/jd_kd.js
7 11 * * * /usr/local/bin/node /home/data/KR/jd_live.js
10 0 * * * /usr/local/bin/node /home/data/KR/jd_jin_tie.js
40 0,21 * * * /usr/local/bin/node /home/data/KR/jd_jdzz.js
30 6 * * * /usr/local/bin/node /home/data/KR/jd_goodMorning.js
#2 0,11 * * * /usr/local/bin/node /home/data/KR/jd_desire.js
13 1,22 * * * /usr/local/bin/node /home/data/KR/jd_gold_creator.js
10 3 * * * /usr/local/bin/node /home/data/KR/jd_shop.js
13 1,6,22 * * * /usr/local/bin/node /home/data/KR/jd_health.js
30 0,6-23 * * * /usr/local/bin/node /home/data/KR/jd_health_collect.js
5 4,14 * * * /usr/local/bin/node /home/data/KR/jd_health_help.js
0 0 * * * /usr/local/bin/node /home/data/KR/jd_health_exchange.js


