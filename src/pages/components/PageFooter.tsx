import styles from '@/styles/PageFooter.module.scss'

import Link from 'next/link'

import { Divider } from 'antd';
import { GithubFilled, GitlabFilled, FacebookFilled, InstagramFilled, LinkedinFilled, MailFilled } from '@ant-design/icons'

const PageFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <center>
            <div className={styles.socialLinks}>
                <ul>
                    <li><Link href="https://www.linkedin.com/in/crisaianvergara/" target="_blank"><LinkedinFilled /></Link></li>
                    <li><Link href="https://github.com/crisaianvergara" target="_blank"><GithubFilled /></Link></li>
                    <li><Link href="https://www.facebook.com/crisaianvergara" target="_blank"><FacebookFilled /></Link></li>
                    <li><Link href="https://www.instagram.com/aian.vergara/" target="_blank"><InstagramFilled /></Link></li>
                    <li><Link href="https://gitlab.com/crisaianvergara" target="_blank"><GitlabFilled /></Link></li>
                    <li><Link href="mailto:crisaianvergara@gmail.com" target="_blank"><MailFilled /></Link></li>
                </ul>
            </div>
            <Divider />
            <p className={styles.copy}>&copy; Cris-aian Vergara {currentYear}</p>
        </center>
    )
}

export default PageFooter
