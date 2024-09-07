import styles from '@/styles/Projects.module.scss';

import Link from 'next/link';
import Head from 'next/head';

import { useState, useEffect } from 'react';

import { GithubOutlined, EyeOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Card, Typography, Space, Tag, Spin } from 'antd';

const { Title } = Typography;

const { Meta } = Card;

const LoadingComponent = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
    </div>
);

const Projects = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for loading (replace with your actual loading logic)
        const delay = setTimeout(() => {
            setLoading(false); // Set loading to false after the delay (simulated data fetch)
        }, 50); // Simulated delay time (you can adjust this)

        // Clear timeout on unmount (cleanup)
        return () => clearTimeout(delay);
    }, []); // Empty dependency array to run only once

    return (
        <>
            <Head>
                <meta content="Cris-aian Vergara Portfolio Website" name="description"></meta>
                <meta content="Cris-aian Vergara" name="author"></meta>
                <meta content="portfolio website" name="keywords"></meta>
                <title>Cris-aian Vergara | Projects</title>
            </Head>
            <div className={styles.projects}>
                {loading ? (
                    <LoadingComponent />
                ) : (
                <>
                    <Card className={styles.card}
                        style={{ width: 350 }}
                        cover={
                            <img
                                alt="example"
                                src="/images/farm.png"
                            />
                        }
                        actions={[
                            <><Link href="https://app.crisaianvergara.com/" target='_blank'><EyeOutlined key="zia-url" /></Link></>,
                            <><Link href="https://github.com/crisaianvergara/pyver" target='_blank' ><GithubOutlined key="farm-github" /></Link></>,
                            // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                        ]}
                        bodyStyle={{ fontSize: '1rem' }}
                    >
                        <Meta
                            title={<Title level={4}>Vergara Farm</Title>}
                            description="Odoo app for farmers to manage loans, track expenses, and handle materials for better finances in agriculture."
                        />
                        <Space size={[0, 2]} wrap style={{ paddingTop: '1rem' }}>
                            <Tag color="magenta">Python</Tag>
                            <Tag color="red">Odoo</Tag>
                            <Tag color="volcano">PostgreSQL</Tag>
                            <Tag color="orange">Docker</Tag>
                            <Tag color="gold">Nginx</Tag>
                            <Tag color="geekblue">Linux</Tag>
                            <Tag color="purple">Amazon Web Services</Tag>
                        </Space>
                    </Card>
                    <Card className={styles.card}
                        style={{ width: 350 }}
                        cover={
                            <img
                                alt="example"
                                src="/images/zia.png"
                            />
                        }
                        actions={[
                            <><Link href="https://www.zia-apps.com/" target='_blank'><EyeOutlined key="zia-url" /></Link></>,
                            <><Link href="#"><CloseCircleOutlined key="zia-github" /></Link></>,
                            // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                        ]}
                        bodyStyle={{ fontSize: '1rem' }}
                    >
                        <Meta
                            title={<Title level={4}>Zia-Apps</Title>}
                            description="Effortlessly manage your finances: track expenses, gain valuable insights, and simplify the process."
                        />
                        <Space size={[0, 2]} wrap style={{ paddingTop: '1rem' }}>
                            <Tag color="magenta">Python</Tag>
                            <Tag color="red">Django</Tag>
                            <Tag color="volcano">Django REST Framework</Tag>
                            <Tag color="orange">Next.js</Tag>
                            <Tag color="gold">Ant Design</Tag>
                            <Tag color="geekblue">TypeScript</Tag>
                            <Tag color="purple">MySQL</Tag>
                        </Space>
                    </Card>
                    <Card className={styles.card}
                        style={{ width: 350 }}
                        cover={
                            <img
                                alt="example"
                                src="/images/kriskap.png"
                            />
                        }
                        actions={[
                            <><Link href="https://kriskap.crisaianvergara.com/" target='_blank'><EyeOutlined key="kriskap-url" /></Link></>,
                            <><Link href="https://github.com/crisaianvergara/kriskap" target='_blank' ><GithubOutlined key="kriskap-github" /></Link></>,
                            // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                        ]}
                        bodyStyle={{ fontSize: '1rem' }}
                    >
                        <Meta
                            title={<Title level={4}>Kriskap</Title>}
                            description="This project showcases my technical abilities and demonstrates my understanding of full-stack development."
                        />
                        <Space size={[0, 2]} wrap style={{ paddingTop: '1rem' }}>
                            <Tag color="magenta">Python</Tag>
                            <Tag color="red">Flask</Tag>
                            <Tag color="volcano">SQLite</Tag>
                            <Tag color="orange">SQLAlchemy</Tag>
                            <Tag color="gold">JQuery</Tag>
                            <Tag color="geekblue">Ajax</Tag>
                            <Tag color="purple">Bootstrap 5</Tag>
                        </Space>
                    </Card>
                    <Card
                        className={styles.card}
                        style={{ width: 350 }}
                        cover={
                            <img
                                alt="example"
                                src="/images/sulat.png"
                            />
                        }
                        actions={[
                            <><Link href="https://sulataian.crisaianvergara.com/" target='_blank' ><EyeOutlined key="sulat-url" /></Link></>,
                            <><Link href="https://github.com/crisaianvergara/sulat-aian" target='_blank' ><GithubOutlined key="sulat-github" /></Link></>,
                            // <><Button type="link"><DeleteOutlined key="setting" /></Button></>,
                        ]}
                        bodyStyle={{ fontSize: '1rem' }}
                    >
                        <Meta
                            title={<Title level={4}>Sulat Aian</Title>}
                            description="This is a tech blog web application built using the Flask framework in Python and CSS Bootstrap 5."
                        />
                        <Space size={[0, 2]} wrap style={{ paddingTop: '1rem' }}>
                            <Tag color="magenta">Python</Tag>
                            <Tag color="red">Flask</Tag>
                            <Tag color="volcano">SQLite</Tag>
                            <Tag color="orange">SQLAlchemy</Tag>
                            <Tag color="gold">HTML/CSS</Tag>
                            <Tag color="geekblue">JavaScript</Tag>
                            <Tag color="purple">Bootstrap 5</Tag>
                        </Space>
                    </Card>
                </>
                )}
            </div>
        </>
    )
}

export default Projects
