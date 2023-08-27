55 23 * * * /sbin/reboot

50 23 * * * find /home/data/logs/jd_script_node -name '*.log' | grep -v 'jd_get_share_code.log' | xargs rm -rf
#52 23 * * * find /home/data/KR -name 'Fruit_ShareCache.json' | xargs rm -rf
#52 23 * * * find /root -name 'Fruit_ShareCache.json' | xargs rm -rf

10 20 * * * /usr/local/bin/node /home/data/jd_scripts/jd_checkCookie.js >> /home/data/logs/jd_script_node/jd_checkCookie.log 2>&1

# 极速版
#0 7 * * * /usr/local/bin/node /home/data/KR/jd_zjb.js
#45 0 * * * /usr/local/bin/node /home/data/KR/jd_yqyl.js
#3 0,19 * * * /usr/local/bin/node /home/data/KR/jd_speed_redpocke.js
11 23 * * * /usr/local/bin/node /home/data/KR/jd_joypark_task.js

# 京东
2 9,22 * * * /usr/local/bin/node /home/data/KR/jd_cash_nolan.js
10 9,12,16,20,23 * * * /usr/local/bin/node /home/data/KR/jd_bean_change_pro.js
10 0,5 * * * /usr/local/bin/node /home/data/KR/jd_cash_wx.js
18 7,18 * * * /usr/local/bin/node /home/data/KR/jd_ddnc_farmpark.js
10 1,16 * * * /usr/local/bin/node /home/data/KR/jd_fruit_help.js
10 10,15 * * * /usr/local/bin/node /home/data/KR/jd_fruit_friend.js
5 5-18/6 * * * /usr/local/bin/node /home/data/KR/jd_fruit_task.js >> /home/data/logs/jd_script_node/jd_fruit_task.log 2>&1
18 0,2,20 * * * /usr/local/bin/node /home/data/KR/jd_wish.js
3 8,17 * * * /usr/local/bin/node /home/data/KR/jd_sign_graphics.js
25 0,23 * * * /usr/local/bin/node /home/data/KR/jd_price.js >> /home/data/logs/jd_script_node/jd_price.log 2>&1
20 2-21/4 * * * /usr/local/bin/node /home/data/KR/jd_plantBean.js
5 2,18 * * * /usr/local/bin/node /home/data/KR/jd_plantBean_help.js


