import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";

const About = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h2>About page</h2>
            </BasePage>
        </BaseLayout>
    );
};

export default About;
