import dynamic from "next/dynamic";
import '../App.css'

const App = dynamic(() => import('../App.jsx'), { ssr: false })

export async function generateStaticParams() {
    return([{slug: "/param"}])
}

export default function Page({ params }) {
    const { slug } = params
    console.log(slug)
    return <App />
}
