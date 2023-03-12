import Layout from '@/Layouts/GuestWide';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Index({ apps }) {
  return (
    <Layout>
      <Head title="App List" />
      <h1>List of App</h1>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Id</th>
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4">Type</th>
              <th className="px-6 pt-5 pb-4">Status</th>
              <th className="px-6 pt-5 pb-4">Customer ID</th>
              <th className="px-6 pt-5 pb-4">Created At</th>
            </tr>
          </thead>
          <tbody>
          
          {apps && apps.data.map(({ id, name, type, status, customer_id, created_at }) => {
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t">
                    {id}
                  </td>
                  <td className="border-t">
                      {name}
                  </td>
                  <td className="border-t">
                      {type}
                  </td>
                  <td className="w-px border-t">
                    {status}
                  </td>
                  <td className="w-px border-t">
                    {customer_id}
                  </td>
                  <td className="w-px border-t">
                    {created_at}
                  </td>
                </tr>
              );
            })}
            {apps.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No Apps found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link href={route('create.app')} className="text-sm text-gray-700 underline">
        Create App
      </Link>
    </Layout>
  )
}