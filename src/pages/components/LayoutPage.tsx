import styles from '@/styles/LayoutPage.module.scss'

import PageFooter from "./PageFooter"
import PageHeader from "./PageHeader"

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const LayoutPage = ({ children }: any) => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <PageHeader />
            </Header>
            <Content className={styles.content}>
                {children}
            </Content>
            <Footer className={styles.footer}>
                <PageFooter />
            </Footer>
        </Layout>
    )
}

export default LayoutPage
