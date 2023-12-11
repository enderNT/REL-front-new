import { Content } from "antd/es/layout/layout";

export default function HomePageLayout({ children }) {
    return (
        <>
            <Content>
                {children}
            </Content>
        </>
    )
}