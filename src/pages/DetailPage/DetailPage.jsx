import { Collapse, Image } from "antd";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { headerStyle, imageStyle, contentStyle, content_TitleStyle, footerStyle, content_CollapseStyle } from "./DetailPage-styles";
import Title from "antd/es/typography/Title";
import { COLLAPSE_ITEMS } from "./utils/constants";

const DetailPage = () => {
  return (
    <>
      <Layout>
        <Header
          style={headerStyle}
        >
          <Image
            alt="error to load"
            width='100%'
            height='100%'
            src="https://tudepa.com/assets/devs/central-32/fachada-3.jpg"
            style={imageStyle}
          >
          </Image>
        </Header>
        <Content
          style={contentStyle}
        >
          <Title style={content_TitleStyle} level={4}>Nombre de la propiedad</Title>
          <Title style={content_TitleStyle} level={4}>$2000</Title>
          <Collapse 
            ghost items={COLLAPSE_ITEMS}
            style={content_CollapseStyle}>
          </Collapse>
        </Content>
        <Footer
          style={footerStyle}
        ></Footer>
      </Layout>
    </>
  )
}

export default DetailPage;
