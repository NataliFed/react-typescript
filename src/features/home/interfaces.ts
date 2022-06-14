export interface PostsInterface {
    id: number,
    title: string,
    body: string,
}


export interface PaginationInterface {
    limit: number,
    skip: number,
    total: number,
}