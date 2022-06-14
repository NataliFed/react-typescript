
import { usePosts } from "./hooks"
import { PostList } from './components'
import { Pagination } from "./components/Pagination";

export const HomeFeature = () => {
    const { posts, onChangePagination, pagination } = usePosts();

    return (<div>
        <PostList posts={posts} />
        <Pagination onChange={onChangePagination} pagination={pagination} />
    </div>

    )
}
