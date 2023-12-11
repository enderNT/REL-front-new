import { Layout } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import './styles.css'

export default function RootLayout({children}) {
    return (
        <html lang="es">
            <body>
                <Layout>
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </Layout>
            </body>
        </html>
    )
}