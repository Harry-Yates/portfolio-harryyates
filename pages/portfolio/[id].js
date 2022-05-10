import BaseLayout from "../../components/layout/BaseLayout";
import BasePage from "../../components/BasePage";
import { useGetPostById } from "../../actions";
import { useRouter } from "next/router";

const Portfolio = () => {
    const router = useRouter();
    const { data: portfolio, error, loading } = useGetPostById(router.query.id);

    return (
        <BaseLayout>
            <BasePage>
                {loading && <p>Loading Data...</p>}
                {error && <div className='alert alert-danger'>{error.message}</div>}
                {portfolio && (
                    <>
                        <h2>Portfolio page</h2>
                        <h3>{portfolio.title}</h3>
                        <p>BODY: {portfolio.body}</p>
                        <p>ID: {portfolio.id}</p>
                    </>
                )}
            </BasePage>
        </BaseLayout>
    );
};

export default Portfolio;
