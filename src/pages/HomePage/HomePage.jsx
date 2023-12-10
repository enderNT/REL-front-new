import { Card, Col, Row, Typography } from "antd/es"
import Meta from "antd/es/card/Meta"
import Layout, { Content, Footer, Header } from "antd/es/layout/layout"
import { HOME_PAGE_STRUCTURES } from "../utils/constants"
import './HomePage-styles.css'

const HomePage = () => {
    return (
        <>
            <Layout>
                <Header></Header>
                <Content>
                    <div
                        id="layout-content-row1-div"
                    >
                        <Typography level={2}>Buscar departamentos</Typography>
                        <img
                            id='layout-content-row1-div-img'
                            src={HOME_PAGE_STRUCTURES.BROWSER_APPARTMENTS_ROW.IMAGE} alt={HOME_PAGE_STRUCTURES.BROWSER_APPARTMENTS_ROW.TEXT}
                        />
                    </div>
                    <Row
                        justify='space-around'
                        wrap
                        className='content__RowCategories'
                    >
                        <div className="mis-categorias"><p>Categorias</p></div>
                        {
                            HOME_PAGE_STRUCTURES.CATEGORIES_STRUCTURE_ROW.map((element, index) => {
                                return(
                                    <Col key={index}
                                    >
                                        <div className='categories__CardCategory'>
                                            <p>{element.CATEGORY}</p>
                                            <img className='cardCategory__Img' src={element.IMAGE} alt={element.CATEGORY} />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Typography level={4}>Propiedades</Typography>
                        <Col span={6}>
                            <Card
                                cover={<img src="https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png" alt="lorem ipsum"/>}
                            >
                                <Meta title='nombre' description='precio de inmueble'></Meta>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Typography level={4}>Destacados</Typography>
                        <Col span={6}>
                            <Card
                                cover={<img src="https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png" alt="lorem ipsum"/>}
                            >
                                <Meta title='nombre' description='precio de inmueble'></Meta>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Footer></Footer>
            </Layout>
        </>
    )
}

export default HomePage
