import { Button, Carousel, Collapse, Flex, Image } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import { Typography } from "antd";
import noImage from "../../assets/images/no-image.webp";
import {
  btnClose,
  content,
  antCarousel,
  slickDots,
  centeredImageCarousel,
  imageCarousel,
  propertyInfoContainer,
  principalTitle,
  price,
  propertyName,
  collapse,
  collapseLabel,
} from "./detailPage.module.css";

const { Title, Text } = Typography;

const getItems = (imagesList, labelStyles = {}) => [
  {
    key: 1,
    label: <span className={labelStyles}>Images</span>,
    children: (
      <div>
        <Carousel
          fade
          effect="fade"
          className={antCarousel}
          dots={{ className: slickDots }}
          autoplay
        >
          {imagesList?.map(({ id, src, alt }) => (
            <div key={id}>
              <div className={centeredImageCarousel}>
                <Image
                  className={imageCarousel}
                  src={src}
                  alt={alt}
                  fallback={noImage}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    ),
  },
  {
    key: 2,
    label: <span className={labelStyles}>Location</span>,
    children: <p>Add some content here.</p>,
  },
  {
    key: 3,
    label: <span className={labelStyles}>Amenities and Services</span>,
    children: <p>Add some content here.</p>,
  },
  {
    key: 4,
    label: <span className={labelStyles}>Property Details</span>,
    children: <p>Add some content here.</p>,
  },
  {
    key: 5,
    label: <span className={labelStyles}>Additional Information</span>,
    children: <p>Add some content here.</p>,
  },
];

const imagesList = [
  {
    id: crypto.randomUUID(),
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "drinking-coffe",
  },
  {
    id: crypto.randomUUID(),
    src: "https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png",
    alt: "statue",
  },
  {
    id: crypto.randomUUID(),
    src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    alt: "woman-photographer",
  },
  {
    id: crypto.randomUUID(),
    src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    alt: "man-jumping",
  },
  {
    id: crypto.randomUUID(),
    src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    alt: "beautiful-woman",
  },
  {
    id: crypto.randomUUID(),
    src: "error",
    alt: "image-not-found",
  },
];

const DetailPage = () => {
  return (
    <>
      <Layout>
        <Content className={content}>
          <Button className={btnClose}>X</Button>
          <Image
            height={"100vh"}
            src="https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png"
            fallback={noImage}
          />
          <div className={propertyInfoContainer}>
            <Flex justify="space-between" align="center">
              <Title className={principalTitle} level={3}>
                Spacious 3-Bedroom
              </Title>
              <Text className={price} strong>
                $2,500
              </Text>
            </Flex>
            <Title className={propertyName} level={2}>
              Luxury Property
            </Title>

            <Collapse
              className={collapse}
              items={getItems(imagesList, collapseLabel)}
              defaultActiveKey={[1]}
              bordered={false}
              expandIconPosition="end"
              ghost
              size="large"
            />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default DetailPage;
