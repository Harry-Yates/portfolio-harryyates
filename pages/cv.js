import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/BasePage";
import { useGetUser } from "@/actions/user";

const Cv = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h2>CV page</h2>
            </BasePage>
        </BaseLayout>
    );
};

export default Cv;
