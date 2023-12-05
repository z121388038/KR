const fs = require('fs');

const COOKIES = {
    'wangqing--18221079476': 'pt_key=AAJlZc5YADA0vVjA4jVd7is1hio2M1nLaE50uWpnZ7SUVmm6Q_MSgbXFtggHui0YMPZY61VJETI; pt_pin=qin%E7%90%B40823;',
    'zhigang2--13321825767': 'pt_key=AAJlZc6OADBhvj3ll4uzI4ieHiV2GPoYXa8HSXUk-qFKUTkk72_7HZM1RFu-cGi1ES3AryVoEYQ; pt_pin=jd_fMOTUvgIPZGX;',
    'zhigang1': 'pt_key=AAJlZc3rADBvtOweKPZKoyZEShC188uWcPvzXWw-HHNjq6iVk8KlxLz4ls5QLvvxxGhLcvoIt9Y; pt_pin=121388038;',
    'qing2--13371916837': 'pt_key=AAJlZc4kADDmcw9IwI9LcdG4qRME5E-KnV8BiRnoTONlkEil7iru0dXvLU-XnZp9so1zy7h5HeY; pt_pin=jd_70892f8a2c567;',
    // 'zhigang3--13361828371': 'pt_key=AAJlawk-ADCFPQFsYAucpJPXFMHR3Bkfgu8AnBmU1eCXARc44E1PDC4g4KOm56bFJ1a4lv6dUh4; pt_pin=jd_OzopTeZYkdKe;',
    'wangsi--18879085948--363082--wj19990305': 'pt_key=AAJlWIdeADCGMVkRano92YTcjDu_WJblDEbbiakWL5LWa_i1KTP4NTNsADlFdg2vhO1umYtSVD8; pt_pin=jd_58a0f549a24c9;',
    'wangsi3--18379038490--363082--wj19990305': 'pt_key=AAJlWId_ADC_uU5Et0Ztm5LqBJcXKhLbsYqFSZo9oUsu0nPaaiS3xVsGULCRM3DddhwrVDQu7Xo; pt_pin=wdxwXeyhCOyASO;',
    // '伟哥2--15800528093--514603': 'pt_key=AAJlM6YAADC2Gx_gZ7p6asbwB5nKR_oWICdrayUxMnmZdenb8TAjBP6x1MzAk4KxGXnYPU57HKw; pt_pin=jd_7c203c2698664;',
    // '伟哥--18817874404--434677': 'pt_key=AAJlM6XjADD2l-RvvUmupVmeb-fLVeawMQhi_QcBJluXA6zvhfb6QVhEn1NxM8BfLTkzq1S_LmY; pt_pin=%E5%89%81%E8%BE%A3%E6%A4%92%E5%A5%BD%E8%BE%A3;',
    '东东--18317114083--612313': 'pt_key=AAJlWIi2ADCM3RMuPeBTZE6cg-n1Mal9KgpFrqJQouCDEp6D9FHtgm7WvFBw_f8GeAbpmU5McFQ; pt_pin=1831711408_m;',
    'wenfei--13764503929--421693': 'pt_key=AAJlWIihADDFVBFBhb4oXSBGQdFwFi2tFc4lwoqs3D7SfcKHrMduWl27HcWZTQSUk1K2UcBQ2mw; pt_pin=feiwen20;',
    'feifei--13611709282--317223': 'pt_key=AAJlWDwCADBOwttagqhcTTitcbvg1dIBZg4Jni0fsvPhj4Tz5530OuCGk73KWa7hL0Brn7pYgE8; pt_pin=%E9%9A%8F%E9%A3%8E%E8%BF%9C%E7%A8%8B;',
    'songfan5--15879082941--420641': 'pt_key=AAJlXC9GADD0WpKFrMq2sPDP1h1VKuDJ5Gsaa_UKagVAyF9UDA_1orBOu7KGGMo12w4k8OdgvrU; pt_pin=jd_66d077c55ee94;',
    'songfan4--13774179686--420620': 'pt_key=AAJlXC6YADA7IuEJohUdZ5UP7qYDk9vGC8GTZdVjp5AaajznRlmRC7HQLkql9PISchOO5a7wnCQ; pt_pin=jd_OZSaXyfdZDNC;',
    'xiaozhi--13585663140--364226': 'pt_key=AAJlWIsYADDHQDyWgY2Fvew7tgD2D9-gtRFnjQSfrpSPNdd-Jw_ycXAyvEdCRgRWE0KbyeRhUPE; pt_pin=jd_6f2cd0b404e58;',
    'feifeima--13761366675--312047': 'pt_key=AAJlWDwlADDxNQsp_r8v5_JEr5vrCKCELWpcOjMXvxBebEzGaS7egqsnCI8vP2Eh50FmbuOHWBE; pt_pin=jd_5b70fb199971f;',
    'hupeng--13879028676--366013': 'pt_key=AAJlWD3iADB_-Pyts4gGDlP2ElZF6r80UeYfY2MIlulFgz0gYWchnXOsfpftvK8lQCPEc1VhEUg; pt_pin=jd_TUmcrAJRyPeg;',
    'yaqing--18875015529--50920X': 'pt_key=AAJlWIopADBWhe3b5zvEyZ9R2VeFHdibVZtNyZGhKU9PynxxNLWjcvCDxx21EwRIDDu7PV-ogqI; pt_pin=%E9%BB%84%E4%BA%9A%E7%90%B4July;',
    'xiaozhi2--13585662340--366032': 'pt_key=AAJlWIymADDO4WSF3FUk63Pm-7E2ddFNmaimw-QlGeadXw4aw1QrbAwAnpQrwG_EJED78lnUElg; pt_pin=jd_BNfbGjLdEygD;',
    'chenchen--18321772130--414247': 'pt_key=AAJlWD0uADD3NVOMuXj4usTVYpQFLuFecC_SWh5J1jegI8V0rBsPG_2etRy2BcY3oKAQddE6KBY; pt_pin=jd_5019920a9eca3;',
    'feifeiba--15801891357--311638': 'pt_key=AAJlWDwWADDmvMqC2qqYptsqs3jv-d8H0bEtuNgvVgs56YxSvPMLVCDnM6syIornltA-Dg3K0ZY; pt_pin=jd_4ec5358c7990f;',
    'songfan1--13482258491--425113': 'pt_key=AAJlXCy9ADCJ3TeBA2NzhGC0j1rCuHdpp0Y3LRXAWCuKMLotrWzVTphIQqubcsGdYNIY93sLAuQ; pt_pin=songfan425;',
    'jiawen--17612154810--363615': 'pt_key=AAJlWD67ADArT6E3o6z7H0do-12E4_v8lb7kWGrbHwTOXPn6EzfH7zFFghSGtVKdkO96X56WSzs; pt_pin=jd_7936a1a552fa2;',
    'chensong--15900769139--424219': 'pt_key=AAJlWIgzADBDy34319EyJKLpdxOi_ge_gBf6D9PLsTKCR3t4AtHTYDscuB-8lRY2gNB9nlvgv7c; pt_pin=ninetypoints;',
    '东东2--18717785846--413547': 'pt_key=AAJlWIkvADAjBZlt9GwoRA7jFf-HsQ6EZUsWopfLlF7JPRZrczKNLNQttGZ6K_S8HYpTi6HgVFU; pt_pin=jd_4e2b0abb70a39;',
    'junjun--15207902708--363617': 'pt_key=AAJlWD6aADDCqoF3vaygbxRfi_gCodDqTCIgz1HZc6U0PY7EQJTWeWlaA1k9BLxkHZqP7NxYEiM; pt_pin=jd_59a62ffd7b096;',
    'songfan2--18221816038--425113': 'pt_key=AAJlXC11ADD-DscmpJS5yLcjqtyGmEfsJgT6uCddSjRqACZANTcBz_8PGgDrGYCNEwOTyA_wk1s; pt_pin=jd_45b7686c80a27;',
    'songfan3--15800664336--420667': 'pt_key=AAJlXC4LADDFHxKV17ixGn-VnJ1qQmOjkR7dEricbd0qcWW1VV0aCxPGDdAeNFMpebx3tFeB2KM; pt_pin=jd_58b8a58a68265;',
    'wangqiang2-17657610987--411827': 'pt_key=AAJlXEsZADAVFHaCrQDWmc-2X2qRQD54vVUTeOw1aOQA9uNDCosx1mlaibqcY2MwjkwLQW8U4WI; pt_pin=13725096398_p;',
    'wangqiang--17516010987--412711': 'pt_key=AAJlXEoOADBCW6_GDY8AcEjEV61yWr1nXky_RyyYHvFFWV09bqTQK4h2D_ofFfgNnN9BSYpylxk; pt_pin=jd_6e7d74af721fb;',
    'zhoulei--15900507586--427156': 'pt_key=AAJlWIjYADD-eMGn2nXQm4ZbLduvz35pLYBFJ_BX-paZ3snEXNd4tw1ymVQY3kMSzwEB4Yt39eE; pt_pin=wszl1987;',
    'shenyuan--13585520850--326012': 'pt_key=AAJlWDzdADDU6kyMzRCgSmYin9NdCLnTpep7eVbBFTKzoeiHvNyFC0H8129F1F5YSVPfIhICgMk; pt_pin=diormore;',
    'hupeng2--15107905660--365624': 'pt_key=AAJlWEVgADBBhuqKALgxtmWod7Oz4NwbjVrpMRORmKSvB1zMCtkEV5dTpuCi8V_5mODIpeWdhZs; pt_pin=jd_bqsnSpBnpYnZ;',
    // '浦南--15692155715--347929': 'pt_key=AAJkJspRADA4l1QMZFh_dtYmMgAYd_UeaG2y0R37hzc7FltmYmwkh1o85q_LERNMz4k_WgqkIfw; pt_pin=jd_5653716359b58;',
    // 'leiqi2--15769273532--322962': 'pt_key=AAJlDoMEADDNF6tnq68pTmNUv_4pK5JHN4pS8LYZ-iN5JCV2pJT2Bo_aOimYd0y-iOfQjJ-jxik; pt_pin=15769273532_p;',
    // 'leiqi53--18301772447--614777': 'pt_key=AAJlDoL8ADBvReMYQqTiH-ToV7Iiry_m67b6RiFmaksarm_DZ3fGuX8QHZICV4Ii1EqgiWuHnTg; pt_pin=leiqi53;',
    // 'lianhua--13918737840--323573': 'pt_key=AAJkzPKAADA3eH1GUxsMW-NJROeoreRN7QKkTJiGLDF5oi7XLHLyxMfQfVMxijEY7UUZRLqo-zM; pt_pin=lianhua891124;',
    // 'zhoulei2--13657105238--42210X': 'pt_key=AAJkJskdADC8ZWRT7IfpZCIs2KDvwLRcf8hGbwRrYt5rOG1__BEoDrPm8eb9Az6ZmzPBOniIgho; pt_pin=jd_7f95818d9aaaa;',
    // 'jiayun--15202170640--410822': 'pt_key=AAJkXN_CADAy38AIv_ENhvbA0qXKzgWDJXI-ZIAMM_szoxnjI26aCzi9t47Rm_DWw1KfIA7VgNM; pt_pin=jd_50b661132d259;',
    // 'weili--18516151228--453021': 'pt_key=AAJkJsjSADDENMuyFcQakeONwT7OJ0QPVvnHhdm2Vxqn4XiwGNb52TvIj6QANLwCJHGVk0BIYo0; pt_pin=%E5%A4%8F%E5%A4%9C%E5%B8%8C;',
    // 'wanghailong--18626252572--323128': 'pt_key=AAJkKBtMADDr62Y_-hAy8mzZDRC8MF9PT4AgMXtgD1AfEdvr5Wkkg9lLCfjzFe2c6r8BsZKNs1k; pt_pin=%E6%B0%B4%E5%A4%95123;',
    // 'chengzi--13482512202--364866': 'pt_key=AAJkJs73ADAbrOWCxy_tfdqkwA1iwkkMSF2WBjnzMLH42nxgiO2Lfl_3QbyTIIEqn1d58ygt7M0; pt_pin=%E5%88%98%E8%89%B3a123456;',
    // 'omi--13917653303--312525': 'pt_key=AAJkM_MmADDPLtTqu6sGG3FKP13m3JhIZw1niUPIUucmWC5dWjLdkVEXhV2YtPEN8cMbt0JfHFc; pt_pin=omiling;',
    // 'omi2--17521536119--310863': 'pt_key=AAJj55sAADC7bNFel_B1g65OkekhLBxpYrbbr-5KtUVDtVbjlkmDdyTAhl5H8k4ybPG853pvyO0; pt_pin=jd_6ddb4dbb04000;',
    // 'feifei2--13501602524--317238': 'pt_key=AAJjnGPhADCS5ZkuEwM-t4sTB_bRoC3kyOpuo3Z1jWyvTeFFgBBPIIiOkc3jeZSTcdLHj39iNxQ; pt_pin=jd_73650adb20cc8;',
    // '浦南2--18817568328--340849': 'pt_key=AAJjTq-TADAKLymNwBjlTCTNOvThcPyGGzzL_aALS8WWGuG3SAlHzFY-jNXImhIlYqMwn5B4BuA; pt_pin=jd_4de43726962d6;',
    // 'yizhou--13916979981--310534': 'pt_key=AAJjWTC7ADBSDnhu0nDeGZXVei8ucKFpAmpC-1cYzZLBTM5Ph_xIBJITnCaRXGNEFmRc5phiFKs; pt_pin=13916979981_p;',
    // 'yizhou2--13817965380--31504X': 'pt_key=AAJjWTEOADB9IrnopZ4JAEQucZGFbPnDAdIT6I8OxlhB5pA1IR-LtKlu-kCGVNiOAinei-skZDs; pt_pin=%E9%A6%99%E7%8C%AA%E5%AE%9D;',
    // 'zhenyu2--17621962167--410049': 'pt_key=AAJjKbliADAlbxCoUrMi1IICa0AVMiw6iv48DzLqYzL4ebzO-psBP5m3XefT9poylfX9DJsgtLs; pt_pin=jd_68b0ef6313ac4;',
    // 'zhenyu--18207182483--376775': 'pt_key=AAJjKbjqADBKnMBHzXy4XXyr7BRpvnF0elWYz8H7oPe--kEFuw9-xbuLDt4IrdiIIpoARptoZzY; pt_pin=13016482674_p;',
    // 'yizhou3--18918250202--311926': 'pt_key=AAJi31QXADBvLkotqSgKHlUIxy3D26B4X35Wmwxd7lx1XU2ns1AeWuBcHkq0Z4GyNetVrk4vVCE; pt_pin=s361917996;',
    // '橙子2--13697958307--364863': 'pt_key=AAJihcU5ADDq4l3Tce09iewpZdEgU1ZgDq7SfdIyivcw0lDgj7pUKJLSmYD6HfwmHMb9hBIFXA4; pt_pin=jd_PgSeKEbOKiDO;',
    // 'wanghailong2--17612166926--323128': 'pt_key=AAJihhK6ADDDka33z7l-DoXsTYHR9-_-_QjCAZEba4kORaRMVJEx12-uOY6TnjZ76Sjqy3tECDc; pt_pin=jd_IyhNVkQgzDCW;',
    // 'hupeng3--13479004221--360919': 'pt_key=AAJib3EnADCN19z0vhTy_liDZDNw9YiKjnSUc02qYjqvqiEZ309QTCQu0u59IjVCvX2sGkKkE2w; pt_pin=lei9784495;',
    // 'hupeng4--18279079319--36562X': 'pt_key=AAJib3H3ADDgK1HyN32c0-tuKwQ1Np0FvMtpY8fSBR08aleI_uf1qKsS4cPRyWVU4c1XNiLbkOE; pt_pin=jd_kGFAvwvsJvDt;',
    // 'xiaoshi--15601879183--32642X': 'pt_key=AAJjoWPxADBqSWDirHskNhMgGW44I3VGacLa6npoReZbKuxZzZ69ASStaHeT3lJgEaezifs_tWo; pt_pin=flute23on;',
    // 'chengzi2--15021420902--522810': 'pt_key=AAJj1SmIADDDmhPU0g9bkC2TI9LGMBpKSeosDkMiXnjbEdtke16uDU5RHpcvsbrMh-eLCXx8Yh8; pt_pin=jd_664cf7191cc39;',
}

// const cookiesSort = Object.keys(COOKIES).map((item, index) => (`${index + 1} -- ${item} -- ${COOKIES[item].split(';')[1]}`))

// fs.writeFileSync('cookies-sort.json', JSON.stringify(cookiesSort, null, '\t'), () => {
// })

for (let item in COOKIES) {
    COOKIES[item] = COOKIES[item].replace(/(^\s+)|(\s+$)|\s+/g, '')
}

const COOKIESNAME = Object.entries(COOKIES).map(([key, value]) => {
    const nameArr = key.split('--')
    const mobileLast = (nameArr[1] && nameArr[1].substring(nameArr[1].length-4)) || ''
    return [decodeURIComponent(value.match(/pt_pin=([^; ]+)(?=;?)/)[1]), `${nameArr[0]},手机尾号为：${mobileLast}`]
})

module.exports = {COOKIES, COOKIESNAME: Object.fromEntries(COOKIESNAME)}
