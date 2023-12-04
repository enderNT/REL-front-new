import { Image } from "antd";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

const DetailPage = () => {
    const contentStyle = {
        textAlign: 'center'
    }
    return (
        <>
            <Layout>
                <Header></Header>
                <Content style={contentStyle}>
                    <Image
                        width={200}
                        height={200}
                        src="https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png"
                        fallback={DETAIL_PAGE_IMAGE_FALLBACK}
                    >

                    </Image>
                </Content>
                <Footer></Footer>
            </Layout>
        </>
    )
}

export default DetailPage;
