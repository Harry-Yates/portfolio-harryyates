import BaseLayout from "../../components/layout/BaseLayout";
import BasePage from "../../components/BasePage";
import Link from "next/link";
import { useGetData } from "../../actions";

const Portfolio = () => {
    const { data, error, loading } = useGetData("/api/v1/posts");

    const renderPosts = posts => {
        return posts.map(post => (
            <li key={post.id}>
                <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
                    <a>{post.title}</a>
                </Link>
            </li>
        ));
    };

    return (
        <BaseLayout>
            <BasePage>
                <h1>Portfolio Page</h1>
                {loading && <p>Loading data...</p>}
                {data && <ul>{renderPosts(data)}</ul>}
                {error && <div className='alert alert-danger'>{error.message}</div>}
            </BasePage>
        </BaseLayout>
    );
};

export default Portfolio;
