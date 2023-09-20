import Navbar from './components/Navbar';
import { useSession } from 'next-auth/react';

export default async function Home() {
	return (
		<>
			<h1 className='text-5xl'>Public Home Page</h1>
		</>
	);
}
