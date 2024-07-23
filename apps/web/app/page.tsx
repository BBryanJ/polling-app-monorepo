import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Polling app</h1>
        <p>
          Running from <code>apps/web</code>
        </p>
      </main>
    </div>
  );
}
