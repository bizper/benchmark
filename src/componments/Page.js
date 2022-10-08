import { Layout, Menu } from "antd"

const { Header, Content, Footer } = Layout

const items = ['1', '2', '3'].map(key => ({
    key,
    label: `nav ${key}`,
}));

const Page = (props) => {
    return (
        <Layout>
            <Header>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
            </Header>
            <Content></Content>
            <Footer></Footer>
        </Layout>
    )
}

export default Page