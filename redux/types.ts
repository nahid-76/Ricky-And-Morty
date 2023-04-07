export interface ICharacter{
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": ILocation | {
        "name": string,
        "url": string
    },
    "location": ILocation | {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": IEpisode[] | string[],
    "url": string,
    "created": string
}

export interface IEpisode{
    "id": number,
    "name": string,
    "air_date": string,
    "episode": string,
    "characters": string[] | ICharacter[],
    "url": string,
    "created": string
}

export interface ILocation{
    "id": number,
    "name": string,
    "type": string,
    "dimension": string,
    "residents": ICharacter[] | string[],
    "url": string,
    "created": string
}

export interface IPullInfo{
    "count": number,
    "pages": number,
    "next": undefined | string,
    "prev": undefined | string
}
