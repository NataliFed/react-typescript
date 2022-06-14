
import { usePosts } from "./hooks"
import { PostList } from './components'
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
    const { posts, onChangePagination, page } = usePosts();

    return (<div>
        <PostList posts={posts} />
        <Pagination onChange={onChangePagination} page={page} />
    </div>

    )
}
