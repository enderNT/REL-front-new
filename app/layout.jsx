import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";

export default function RootLayout({children}) {
    return (
        <html lang="es">
            <body>
                <Layout>
                    <Header></Header>
                    {children}
                </Layout>
            </body>
        </html>
    )
}