
import { usePosts } from "./hooks"
import { PostList } from './components'

export const HomeFeature = () => {
    const { posts } = usePosts();

    return (<div>
        <PostList posts={posts} />
    </div>

    )
}
