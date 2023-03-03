import Layout from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';

export default function Index({ user }) {
  return (
    <Layout>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
    </Layout>
  )
}