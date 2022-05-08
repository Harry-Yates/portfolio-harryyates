import BaseLayout from "../../components/layout/BaseLayout";
import axios from "axios";

const Portfolio = ({ portfolio }) => {
    return (
        <BaseLayout>
            <h2>Portfolio Page</h2>
            <h3>{portfolio.title}</h3>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
        </BaseLayout>
    );
};

Portfolio.getInitialProps = async ({ query }) => {
    let post = {};

    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${query.id}`,
        );
        post = res.data;
    } catch (e) {
        console.error(e);
    }

    return { portfolio: post };
};

export default Portfolio;
