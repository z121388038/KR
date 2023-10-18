const fs = require('fs');

const COOKIES = {
    'wangqing--18221079476': 'pt_key=AAJlDxLkADDIxUU6dahAzDiYVaAH0pE4Gbdn4ZClEdtOE8SbtwL0OwNaIm0HlXK097wV6n7n_2E; pt_pin=qin%E7%90%B40823;',
    'zhigang2--13321825767': 'pt_key=AAJlDxLrADCWyybCJw7KnweV9gXxeelnvHxb2WCmI1nWiNrwuxzlxKVFYjQP0mB9goueczf2Sjg; pt_pin=jd_fMOTUvgIPZGX;',
    'zhigang1': 'pt_key=AAJlDxL-ADBMnT4xofEnZzSaPma-YDGaIdFXG19dUV8N23ly0NIat_LyBYulyA-dS9km6oOENgg; pt_pin=121388038;',
    'qing2--13371916837': 'pt_key=AAJlDxMUADByBeaRkceeQSvrz-_7i55lKiD565DUhybSBLXQC1FalVYSi2twhjmuKQIo2l5gCLY; pt_pin=jd_70892f8a2c567;',
    'zhigang3--13361828371': 'pt_key=AAJlJADCADAT8DGhGHlfUzRm9Pj2-7G-L7MF5N49FRh8jIWFt0lo0zom_-s-afjpU2LIjta2mZw; pt_pin=jd_OzopTeZYkdKe;',
    'wangsi--18879085948--363082--wj19990305': 'pt_key=AAJlKo1rADCjhlGiwxOnlfAP4P0umM3MX-cdNLVoTxGxNNnkh8ZuwTR7v1GfBF59nTX9H_kGUBQ; pt_pin=jd_58a0f549a24c9;',
    'wangsi3--18379038490--363082--wj19990305': 'pt_key=AAJlKo2cADA9uVwmMMp7_p5oWys7S10FbfhlOL4uQYMRsUvibKXOYTzdfNroBdPwJLIDlbCTKfA; pt_pin=wdxwXeyhCOyASO;',
    // 'feifeiba--15801891357--311638': 'pt_key=AAJlAcssADBe6-Vq5yyRMv7nya5HNx7aJeI_7Y07dO4oeKPfBZm8WdFPVEgHaVomqOPC-dtG_xU; pt_pin=jd_4ec5358c7990f;',
    'xiaozhi--13585663140--364226': 'pt_key=AAJlKo3MADCpQDDN_zWb2V-vx3ZhVrIIZq1ati43_DJIxdYczyN9vNF9BkacSVTOoLmOSsjMZew; pt_pin=jd_6f2cd0b404e58;',
    'hupeng--13879028676--366013': 'pt_key=AAJlKo10ADDd9bZSmQZOTaoEAc7hUrsqT-xR6DyiP8CSXJ8nBe7HYnln2NZS8IiMizkWjPvLMYQ; pt_pin=jd_TUmcrAJRyPeg;',
    'jiawen--17612154810--363615': 'pt_key=AAJlKoyIADCpTStMG4LxXF9k_pZA9OjAn3mh96XRcD6M0TGFl-tUYK9wTAYkb90XN8mqKFx9kLM; pt_pin=jd_7936a1a552fa2;',
    'chenchen--18321772130--414247': 'pt_key=AAJlKpC7ADAwHckxMufb53RmXmex2LLO9pfunQqj1ofzI3xCxOtAKd4RYphrjp4w7D50114iDYs; pt_pin=jd_5019920a9eca3;',
    'songfan1--13482258491--425113': 'pt_key=AAJlK2eRADBBwb_9tCXbuUs2JegrpfsbQh7qFoYBVhV15nyfZ9pyHgqnoUfxV_9LIx3JKF_ibsc; pt_pin=songfan425;',
    'feifeima--13761366675--312047': 'pt_key=AAJlKovmADDBMKmRWzuOr0EEgejgV6C5j13hTwC2cJ20uq3ONgA9ANv5Sct5_vZsGdf76IqMCUk; pt_pin=jd_5b70fb199971f;',
    // '伟哥2--15800528093--514603': 'pt_key=AAJlAZ2WADBk9ZrRpIJj1NnQfpUSkJt_agCZGG8r36V5d7EwHXgSXYRHhhw8JbS78o0cH-ZIF2U; pt_pin=jd_7c203c2698664;',
    // '伟哥--18817874404--434677': 'pt_key=AAJlAZ07ADDFx0K_3VY71t3iAat5c0IN2OlKJDzpQz8gAoxXyiBwsQD0aslqoFLJZBvItgNDAOs; pt_pin=%E5%89%81%E8%BE%A3%E6%A4%92%E5%A5%BD%E8%BE%A3;',
    'songfan2--18221816038--425113': 'pt_key=AAJlK2bUADCuYBqpr-X_v09cpT-OheAwv4cibO87tfRfS1UcHDDHiAM3_76xCZwKU2RU1EcCCcQ; pt_pin=jd_45b7686c80a27;',
    '东东--18317114083--612313': 'pt_key=AAJlKpEDADC5GVPPCXj32oLciNdVhYjlwBZyny78I8sd7YwUEbBzFSSAtV_4KNdlUKryyOTevVE; pt_pin=1831711408_m;',
    'wenfei--13764503929--421693': 'pt_key=AAJlKpS0ADAa4r1RnQt7-QokbZVGx4FKHFW6E5zx6xsLz_6RWT51qXWWWCK0gmopKIGaAlF1Qh4; pt_pin=feiwen20;',
    'chensong--15900769139--424219': 'pt_key=AAJlKpDVADDa6_LY5muAi1L_1bVJJdtR2Tv-4a-b5xSYary3PL4-6kxWjnMKI951ENW_zrLf5PA; pt_pin=ninetypoints;',
    'songfan3--15800664336--420667': 'pt_key=AAJlK2aDADBT8KGNLMzsyD9Y0wW63jimVHNOY8FBBLg8ch_d5If9cyJZT6ji2rmf4iGrpsyWj5o; pt_pin=jd_58b8a58a68265;',
    // '东东2--18717785846--413547': 'pt_key=AAJk13VnADDbos0dcV9WkMhOxjVFC7mG6t7N3FONS4o4_uV2YsjaVQW9V30FAflj-SPWLmBOcIk; pt_pin=jd_4e2b0abb70a39;',
    'xiaozhi2--13585662340--366032': 'pt_key=AAJlKpaPADDtuq_Wu7YbDJ9ACiBwfBQtW8eITnMhhamdhEqj_2t6m5zKA3m_FsrEJwGiAq2KPq8; pt_pin=jd_BNfbGjLdEygD;',
    'junjun--15207902708--363617': 'pt_key=AAJlKox_ADAANrNZ3bM_gDZ3dJF-uVQnnjSrUS7topO7xE4hOofoUyF8q0tVYa-Yr4u64wk9lXI; pt_pin=jd_59a62ffd7b096;',
    'leiqi2--15769273532--322962': 'pt_key=AAJlDoMEADDNF6tnq68pTmNUv_4pK5JHN4pS8LYZ-iN5JCV2pJT2Bo_aOimYd0y-iOfQjJ-jxik; pt_pin=15769273532_p;',
    'leiqi53--18301772447--614777': 'pt_key=AAJlDoL8ADBvReMYQqTiH-ToV7Iiry_m67b6RiFmaksarm_DZ3fGuX8QHZICV4Ii1EqgiWuHnTg; pt_pin=leiqi53;',
    'feifei--13611709282--317223': 'pt_key=AAJlKovYADAkFx9kvAl8BvFVgNjAEelIofclM9lhxfZHDuC1AU6SHHkx0s_Wjx7gY-_15nvYxco; pt_pin=%E9%9A%8F%E9%A3%8E%E8%BF%9C%E7%A8%8B;',
    'songfan5--15879082941--420641': 'pt_key=AAJlK2HzADCyMA5M6TrKXhc2mco79ELUsXdroPUkkgb7-pGjQSbUt8MW___Chtl-770QouAYrzI; pt_pin=jd_66d077c55ee94;',
    'songfan4--13774179686--420620': 'pt_key=AAJlK2WtADAojCSj2oxFB7O5HAWBYPSS-NCS_NnNLNfGMo9gaDNTrqy3Pr0U8rhb0OCDucWa0ug; pt_pin=jd_OZSaXyfdZDNC;',
    'wangqiang2-17657610987--411827': 'pt_key=AAJlI_edADCBnCCLlQP3DmjVHgBhEzz60hWeWLNeotbYABm4oBBFY1aIBcLcXnaaGFOEmyIGmjo; pt_pin=13725096398_p;',
    'wangqiang--17516010987--412711': 'pt_key=AAJlI_XaADDVuMUqZMTeQrVoBMWujtuwaTBhNyBBydgsVI41HbU8pzTbAerOtaRFD-8IqhRL974; pt_pin=jd_6e7d74af721fb;',
    'yaqing--18875015529--50920X': 'pt_key=AAJlKpU5ADC7y0wRFCu7V-Knaf7B0IzraIHRX02OJuLMwqJFNXYjAE-dGLMBukatOIJt2LEwO6k; pt_pin=%E9%BB%84%E4%BA%9A%E7%90%B4July;',
    'zhoulei--15900507586--427156': 'pt_key=AAJlKo_XADDkTJ1WWr_N0NdvZz7qJ49ME_fUUuCSo3U-ztOwhEAG6Tu4ltdFATwSJQmCJdQli8Y; pt_pin=wszl1987;',
    'shenyuan--13585520850--326012': 'pt_key=AAJlKo82ADDBTHQJNrdrHJ7s1FB9Ooj46ttADixy4jQR7OVPEs4A6B_waad-jD6Ys7wVHT4jDOU; pt_pin=diormore;',
    'hupeng2--15107905660--365624': 'pt_key=AAJlKo2SADD2ie-4iUR_NPKkaF_yk-YvkI8o0J7g4Lh2Wc-wrf2LO1KZexIgxqQOgFNp8K9WhFU; pt_pin=jd_bqsnSpBnpYnZ;',
    // '浦南--15692155715--347929': 'pt_key=AAJkJspRADA4l1QMZFh_dtYmMgAYd_UeaG2y0R37hzc7FltmYmwkh1o85q_LERNMz4k_WgqkIfw; pt_pin=jd_5653716359b58;',
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
