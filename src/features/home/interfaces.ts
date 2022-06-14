export interface PostsInterface {
    id: number,
    title: string,
    body: string,
}


export interface PaginationInterface {
    limit: number,
    total: number,
    page: number
}