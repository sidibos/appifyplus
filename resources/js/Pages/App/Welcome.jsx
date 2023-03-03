import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome({ user }) {
  return (
    <Guest>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
    </Guest>
  )
}