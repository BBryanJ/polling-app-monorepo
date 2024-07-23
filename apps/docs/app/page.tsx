import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Polling app (Docs)</h1>
        <p>
          Running from <code>apps/docs</code>
        </p>
      </main>
    </div>
  );
}
