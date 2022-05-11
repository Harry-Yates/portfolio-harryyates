import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";

const EasterEgg = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>Easter Egg Page - Hello {user.given_name}</h1>
            </BasePage>
        </BaseLayout>
    );
};

export default withAuth(EasterEgg);
