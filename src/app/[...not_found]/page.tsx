import Link from 'next/link'

export default function NotFound() {
    return <div className='flex items-center justify-center text-blackish min-h-svh flex-col gap-10'>
        <h1 className=' font-extrabold'> Page Not found – 404!</h1>
        <div className='p-2 border rounded border-black hover:bg-red-400 hover:text-white'>
            <Link href="/">Go back to Home</Link>
        </div>
    </div>
}