import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import { postsService } from "services/postsService";

export default function Home({content}) {

    return (
        <Layout className="">
            <SEO
                title="Post App 🚀"
                description="a post management app"
            />
            <h2 dangerouslySetInnerHTML={{ __html: content.headline }}/>
        </Layout>
    );
}


export async function getServerSideProps(context) {
    const { req } = context;
    const content = await postsService.fetchHomeData();
    // console.log(homeContent);
    return {
        props: {
            content
        }
    };
}