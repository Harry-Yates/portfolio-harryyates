import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { useRouter } from "next/router";

const EasterEgg = () => {
    const { data, loading } = useGetUser();
    const router = useRouter();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        // Todo: Improve return
        router.push("/api/auth/login");
        return null;
    } else {
        return (
            <BaseLayout user={data} loading={loading}>
                <BasePage>
                    <h2>Easter Egg Page</h2>
                </BasePage>
            </BaseLayout>
        );
    }
};

export default EasterEgg;
