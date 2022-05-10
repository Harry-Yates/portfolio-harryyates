import BaseLayout from "../../components/layout/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import { useGetPosts } from "../../actions";

const Portfolio = () => {
    const { posts, error, loading } = useGetPosts();

    const renderPosts = () => {
        return posts.map(post => (
            <li key={post.id}>
                <Link href={`/portfolio/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
                {post.title}
            </li>
        ));
    };

    return (
        <BaseLayout>
            <BasePage>
                <h2>Portfolio page</h2>
                {loading && <p>Loading data...</p>}
                {posts && <ul>{renderPosts(posts)}</ul>}
                {error && <div className='alert alert-danger'>{error.message}</div>}
            </BasePage>
        </BaseLayout>
    );
};

export default Portfolio;
