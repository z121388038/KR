const fs = require('fs');

const COOKIES = {
    'wangqing--18221079476': 'pt_key=AAJk50cTADDvh4qoMok34k2cv8WL_VU9Nqkk9R8LBZjREoakP-GnTHgq3X3dpkCeO6rpwjgxkXw; pt_pin=qin%E7%90%B40823;',
    'zhigang2--13321825767': 'pt_key=AAJk50cvADAblATA17O4ZDBs8_RaF5mSY2_Qusbxbbjqs9MIjqgg9a8jZpeKKGANrg-FjR_HzGI; pt_pin=jd_fMOTUvgIPZGX;',
    'zhigang1': 'pt_key=AAJk6xlVADBP1ulG7jFeZhDaqT7JnKlcgN7LLnsJdy_8vVLfYuO2gTP92UW6RZG-nfgt_-mW1Ks; pt_pin=121388038;',
    'qing2--13371916837': 'pt_key=AAJk50bxADBrei6Y275lNFmYki4YQEy4nyGI8e_Mlu-Bbx09fDy6I_ShaXHAVpOgeAqp6QYm-cY; pt_pin=jd_70892f8a2c567;',
    'zhigang3--13361828371': 'pt_key=AAJkzPqQADDSTb4Wfrd5QHPXPX1vYWBbb8p3hY7d6w0zSwObU-Fnc2rcAsat8lD2TskntQ5PlKY; pt_pin=jd_OzopTeZYkdKe;',
    'wangsi--18879085948--363082--wj19990305': 'pt_key=AAJk-xfIADAog57H9qR7F5in1EXRfOSH_LX0kDGbSDnmabMWvZrrsQdyxsbTpJFA-OZG5y9Cnxc; pt_pin=jd_58a0f549a24c9;',
    'wangsi3--18379038490--363082--wj19990305': 'pt_key=AAJk-xgDADCb9pMFzhVQ6rwEK9EgaEaUZVbQYC-XCO2bA8LMIvmZwa8hI2mmgkeXjaX2sLcIdgk; pt_pin=wdxwXeyhCOyASO;',
    'wenfei--13764503929--421693': 'pt_key=AAJk1kl-ADBxj4weoc03y3xptVgB25j9lZowweISaTO8AdDEIuKm_FM29zzQl3UI-aEEfQ2ApxI; pt_pin=feiwen20;',
    'xiaozhi--13585663140--364226': 'pt_key=AAJk-yiFADCPUXJ_h9KvuYILSgqYxUbQ0JLyAF3iP0WQ4AkYBSDKPulesLocIPIJr2ONJxvj2Xo; pt_pin=jd_6f2cd0b404e58;',
    '伟哥2--15800528093--514603': 'pt_key=AAJk13bEADAaDr_NuPEOrebIXQiSZcL-UGKtXgpYAmdWcH57-R6AOImhrg0CQHDO-E7LL5rBfSQ; pt_pin=jd_7c203c2698664;',
    '伟哥--18817874404--434677': 'pt_key=AAJk13KQADDZG2fRgwt-TG2NNf65cl9oxr-ckKOP0M93B6lWJzBrjx_xn7X_wqUJ01wRJpdU4Lk; pt_pin=%E5%89%81%E8%BE%A3%E6%A4%92%E5%A5%BD%E8%BE%A3;',
    '东东--18317114083--612313': 'pt_key=AAJk13VVADATnS3CjC_s1EWed0A131ameLL5QbxtJoQFzQ1MJrANV27YVyhVBq56FqEIevsUFoc; pt_pin=1831711408_m;',
    // 'songfan4--13774179686--420620': 'pt_key=AAJk6xK7ADDSoF-LKj2kEmQWIhw6aMMjSjrRN0ppFv5yeK0zBKCZZ9-xAmo4IXEx7GHbPaLpwzE; pt_pin=jd_OZSaXyfdZDNC;',
    // 'songfan3--15800664336--420667': 'pt_key=AAJk6xJbADA6gNvBWAjQNvbPuVUp-_c97lBb6yOgVTuYyMzwpqrGWhKjX977DJhLAnVGPBXd8Ss; pt_pin=jd_58b8a58a68265;',
    'feifeiba--15801891357--311638': 'pt_key=AAJk15nTADDCj2AePTDgy0k6DNTJE2ZQucomz_Z-vqdB33iYDwizO4apl1XcbJl0QefA5PnufOQ; pt_pin=jd_4ec5358c7990f;',
    'songfan2--18221816038--425113': 'pt_key=AAJk1iy8ADBAS9xqI0nkZjmT7Eo3xLuuUO13CmDzKIniTE9_UwbWFiSF49SF0GOwy_N3ONeYIHU; pt_pin=jd_45b7686c80a27;',
    '东东2--18717785846--413547': 'pt_key=AAJk13VnADDbos0dcV9WkMhOxjVFC7mG6t7N3FONS4o4_uV2YsjaVQW9V30FAflj-SPWLmBOcIk; pt_pin=jd_4e2b0abb70a39;',
    'hupeng--13879028676--366013': 'pt_key=AAJk1ineADC1EvYRxY8pEt4br5BJnhVyaw7ZF-5lEhoEnumjs56PO0B4Z4350C115StcR0_SXwU; pt_pin=jd_TUmcrAJRyPeg;',
    'leiqi2--15769273532--322962': 'pt_key=AAJk1i59ADDeX0B__aFSbPuNKqoOhKKiOFQGDlf96gOg7L3yLSiQvr7qkx8d71cQYlyp61uIA0I; pt_pin=15769273532_p;',
    'jiawen--17612154810--363615': 'pt_key=AAJk-x4KADB_1O8MzpFTfAaNgmC1yhXEVVKM7qVkGEs_Sl5j-pj-0WsnzizimbAMxpixZ4zOKFQ; pt_pin=jd_7936a1a552fa2;',
    // 'xiaozhi2--13585662340--366032': 'pt_key=AAJkzPIFADAEHNMqO6877qhFcyUEWz5O0-PO4DY1c3wZIcjzSwf6pKM4GmxtyaGc9ykT17G49wg; pt_pin=jd_BNfbGjLdEygD;',
    'yaqing--18875015529--50920X': 'pt_key=AAJk1isbADBIuU0yCskht5dYfHbnREistznZObBoWl02uLh3cYfBqJha2Mo583JHNn7MZUbDaPM; pt_pin=%E9%BB%84%E4%BA%9A%E7%90%B4July;',
    'leiqi53--18301772447--614777': 'pt_key=AAJk1i5iADAHXFE8jS3WTtaTn8cJT0YRW5x_pzzhC77pHExrAJLl7GAXWNBbvdU1NND5nBjKtdE; pt_pin=leiqi53;',
    'chenchen--18321772130--414247': 'pt_key=AAJk1ivCADA6cgbaT0YuXEaSG-spU2-67-MgjiXZyV_Zjt_LrTgP1u9nY8DFeUop7BF2avkm70Y; pt_pin=jd_5019920a9eca3;',
    'chensong--15900769139--424219': 'pt_key=AAJk1i0AADATjupZFJUYI_Vu2jMZNKzRP4lXkwgwW8bBLqB42WE9qN3ms9RzBKjXpZ0Su1WpPD4; pt_pin=ninetypoints;',
    'songfan1--13482258491--425113': 'pt_key=AAJk1ivEADB4qoRXbOSnUdQkjjMaRcTGz9IGcSBRxHSdLnwwBdTFqyfcT_h6y3yj2XBk5SLOIPc; pt_pin=songfan425;',
    'wangqiang--17516010987--412711': 'pt_key=AAJk-yEfADDm6qNvqVDT0mHYh65UI2CeGLCWagmx-QR_9a9Aor9f-GqC1ySBkmMhjbkp7gU0_3A; pt_pin=jd_6e7d74af721fb;',
    'wangqiang2-17657610987--411827': 'pt_key=AAJk-yKRADA0-P00iDFZi3ByAiVRg37_CBsa5ijzZrj3C1PYb7okdwKW55nfNR-n-VQXKVpC8uc; pt_pin=13725096398_p;',
    'feifei--13611709282--317223': 'pt_key=AAJk15ncADDuFOOaeS9vly8TyKcQLp1g22NapYB814taxF_Tp5A7ybvWzsrGCniNw0FuB-tFX3Q; pt_pin=%E9%9A%8F%E9%A3%8E%E8%BF%9C%E7%A8%8B;',
    'feifeima--13761366675--312047': 'pt_key=AAJk15q5ADBgic9yY-OYviUzBpEr-lLLqwlQvKw1Rl_0LOxqxJ9tScu7n7I3iGGNUoQQCjsVDmM; pt_pin=jd_5b70fb199971f;',
    'junjun--15207902708--363617': 'pt_key=AAJk1ip3ADDQvppokEo6dTQjcNMfnsTrYCZJ0mMtgQZVjJOwVME75SlsxRaJZ1K7Z5OV3qY0lOM; pt_pin=jd_59a62ffd7b096;',
    'songfan5--15879082941--420641': 'pt_key=AAJk6xF0ADBoZQrRSGvLo2Z-qX8CVG4fU0aiV5u1Ymvt6vUUi1S__ioZZKkawZNhd42bFWRLzGc; pt_pin=jd_66d077c55ee94;',
    // 'lianhua--13918737840--323573': 'pt_key=AAJkzPKAADA3eH1GUxsMW-NJROeoreRN7QKkTJiGLDF5oi7XLHLyxMfQfVMxijEY7UUZRLqo-zM; pt_pin=lianhua891124;',
    'shenyuan--13585520850--326012': 'pt_key=AAJk1ikPADBwlGFrLrdf09xIyB4bCt6ZFNJHReoPY3XzedJR-EEDoJJ78YnsrZK1dfIur5RdJHU; pt_pin=diormore;',
    'zhoulei--15900507586--427156': 'pt_key=AAJk1iktADC8BIwbQ2oRKge3yiz700FYjpxnoJ1UGcpADhxK9aarQ1fczuO2wntX_Ej8BTfZ9JM; pt_pin=wszl1987;',
    'hupeng2--15107905660--365624': 'pt_key=AAJk13PHADCjqcX19EjeUTqO0_dEByhRoSTO7SbTcxcdF6GyBFe7TYXmDKYfBwH-XOgQRhbogXw; pt_pin=jd_bqsnSpBnpYnZ;',
    // 'zhoulei2--13657105238--42210X': 'pt_key=AAJkJskdADC8ZWRT7IfpZCIs2KDvwLRcf8hGbwRrYt5rOG1__BEoDrPm8eb9Az6ZmzPBOniIgho; pt_pin=jd_7f95818d9aaaa;',
    // 'jiayun--15202170640--410822': 'pt_key=AAJkXN_CADAy38AIv_ENhvbA0qXKzgWDJXI-ZIAMM_szoxnjI26aCzi9t47Rm_DWw1KfIA7VgNM; pt_pin=jd_50b661132d259;',
    // '浦南--15692155715--347929': 'pt_key=AAJkJspRADA4l1QMZFh_dtYmMgAYd_UeaG2y0R37hzc7FltmYmwkh1o85q_LERNMz4k_WgqkIfw; pt_pin=jd_5653716359b58;',
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
