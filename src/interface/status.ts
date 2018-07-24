/**
 * LOL-STATUS-V3
 * https://developer.riotgames.com/api-methods/#lol-status-v3
 */

interface ShardStatus {
    name: string
    region_tag: string
    hostname: string
    services: Array<Service>
    slug: string
    locales: Array<string>
}

interface Service {
    status: string
    incidents: Array<Incident>
    name: string
    slug: string 
}

interface Incident {
    active: boolean
    created_at: Date
    id: number
    updates: Array<Message>
}

interface Message {
    severity: string
    author: string
    created_at: Date
    translations: Array<Translation>
    updated_at: Date
    content: string
    id: string
}

interface Translation {
    locale: string
    content: string
    updated_at: Date
}

export default ShardStatus