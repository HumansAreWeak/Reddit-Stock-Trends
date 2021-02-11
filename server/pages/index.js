import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Logo from '../images/logo.png';
import Image from 'next/image';
import FloatingButton from '../components/FloatingButton';

export default function Home() {
    function onClick() {
        console.log('Hello World!');
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Reddit Stock Trends</title>
            </Head>
            <h1>Reddit Stock Trends</h1>
            <Image src={Logo} width={128} height={128} />

            <div className={styles.ticker_list}>a</div>

            <FloatingButton onClick={() => onClick()} />
        </div>
    );
}
