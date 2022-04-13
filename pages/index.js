import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <Link href="/recipes">
          <a>See Recipes</a>
        </Link>
      </div>
    </>
  )
}
