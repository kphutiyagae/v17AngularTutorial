export type  CharacterUrl = {
    type: string
    url: string
}

export type CharacterEvents = {
    available: number
    collectionURI: string
    items: ComicItem[]
    returned: number
}

export type StoryItem = {
    resourceURI: string
    name: string
    type: string
}

export type CharacterStories = {
    available: number
    collectionURI: string
    items: StoryItem[]
    returned: number
}

export type SeriesItem = {
    resourceURI: string
    name: string
}

export type CharacterSeries = {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
}

export type ComicItem = {
    resourceURI: string
    name: string
}

export type CharacterComics = {
    available: number
    collectionURI: string
    items: ComicItem[]
    returned: number
}

export type Thumbnail = {
    path: string;
    extension: string;
}

export type Character = {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: CharacterComics;
    series: CharacterSeries;
    stories: CharacterStories;
    events: CharacterEvents;
    urls: CharacterUrl[];
}

export type ResponseData = {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}

export type ApiResponse = {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: ResponseData;
}
