export interface RegionList {
    [key: string]: RegionType
}

export interface RegionType {
    platform: string
    host: string
}

export let Region: RegionList = {
    br: {
        platform: 'BR1',
        host: 'br1.api.riotgames.com'
    },
    eune: {
        platform: 'EUN1',
        host: 'eun1.api.riotgames.com'
    },
    euw: {
        platform: 'EUW1',
        host: 'euw1.api.riotgames.com'
    },
    jp: {
        platform: 'JP1',
        host: 'jp1.api.riotgames.com'
    },
    kr: {
        platform: 'KR',
        host: 'kr.api.riotgames.com'
    },
    lan: {
        platform: 'LA1',
        host: 'la1.api.riotgames.com'
    },
    las: {
        platform: 'LA2',
        host: 'la2.api.riotgames.com'
    },
    na: {
        platform: 'NA1',
        host: 'na1.api.riotgames.com'
    },
    oce: {
        platform: 'OC1',
        host: 'oc1.api.riotgames.com'
    },
    tr: {
        platform: 'TR1',
        host: 'tr1.api.riotgames.com'
    },
    ru: {
        platform: 'RU',
        host: 'ru.api.riotgames.com'
    },
    pbe: {
        platform: 'PBE1',
        host: 'pbe1.api.riotgames.com'
    }
}