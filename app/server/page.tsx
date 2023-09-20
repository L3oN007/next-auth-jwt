import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import UserCard from '../components/UserCard';
import { redirect } from 'next/navigation';
import { AuthGetApi } from '@/lib/fetchApi';

export default async function ServerPage() {
	const session = await getServerSession(options);
	const books = await AuthGetApi('/books');

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/server');
	}

	return (
		<section className='flex flex-col gap-6'>
			<UserCard user={session?.user} pagetype={'Server'} />
			<div>{JSON.stringify(books)}</div>
		</section>
	);
}
