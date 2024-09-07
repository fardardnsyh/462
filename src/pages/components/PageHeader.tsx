import styles from '@/styles/PageHeader.module.scss'

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Button, Divider, Drawer, Menu, Spin } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    {
        label: (
            <Link className={styles.navLink} href="/">
                01 : Home
            </Link>
        ),
        key: 'home',
    },
    {
        label: "|",
        key: 'dividerOne',
    },
    {
        label: (
            <Link className={styles.navLink} href="/projects">
                02 : Projects
            </Link>
        ),
        key: 'projects',
    },
    {
        label: "|",
        key: 'dividerTwo',
    },
    {
        label: (
            <Link className={styles.navLink} href="/files/resume.pdf"  target="_blank" rel="noopener noreferrer">
                03 : Resume
            </Link>
        ),
        key: 'resume',
    }
];

const PageHeader: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true); // New loading state


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const [current, setCurrent] = useState('');

    const onClickNavbar: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        const handleResize = () => {
            setOpen(false);
        };

        // Simulating loading delay for the header
        const delay = setTimeout(() => {
            setLoading(false); // Set loading to false after the delay (simulated header load)
        }, 50); // Simulated delay time (you can adjust this)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(delay); // Clear the timeout on unmount (cleanup)
        };
    }, []);

    if (loading) {
        return (
            <center>
                <Spin size='large' />
            </center>
        );
    }

    return (
        <div className={styles.container}>
            <Menu className={styles.menu} onClick={onClickNavbar} selectedKeys={[current]} mode="horizontal" items={items} />
            <div className={styles.isMobile}>
                <Button type="primary" onClick={showDrawer}>
                    <MenuOutlined />
                </Button>
                <Drawer placement="right" onClose={onClose} open={open}>
                    <Menu className={styles.menuIsMobile} onClick={onClickNavbar} selectedKeys={[current]} mode="vertical" items={items} />
                </Drawer>
            </div>
        </div >
    );
};

export default PageHeader;