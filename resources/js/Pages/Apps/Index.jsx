import Layout from '@/Layouts/GuestWide';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';

export default function Index({ apps, auth}) {
  return (
    <Authenticated auth={auth}>
      <Head title="App List" />
      <div className="p-6 flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>

        <h1>List of Apps</h1>
        <div className="flex-1">
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="font-bold text-left">
                  <th className="px-6 pt-5 pb-4">Name</th>
                  <th className="px-6 pt-5 pb-4">Type</th>
                  <th className="px-6 pt-5 pb-4">Status</th>
                  <th className="px-6 pt-5 pb-4">Customer ID</th>
                  <th className="px-6 pt-5 pb-4">Created At</th>
                  <th className="px-6 pt-5 pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
              
              {apps && apps.data.map(({ id, name, type, status, customer_id, created_at }) => {
                  return (
                    <tr
                      key={id}
                      className="hover:bg-gray-100 focus-within:bg-gray-100"
                    >
                      <td className="px-6 pt-5 pb-4 border-t">
                          {name}
                      </td>
                      <td className="px-6 pt-5 pb-4 border-t">
                          {type}
                      </td>
                      <td className="px-6 pt-5 pb-4 border-t">
                        {status}
                      </td>
                      <td className="px-6 pt-5 pb-4 border-t">
                        {customer_id}
                      </td>
                      <td className="px-6 pt-5 pb-4 border-t">
                        {created_at}
                      </td>
                      <td className="px-6 pt-5 pb-4 border-t">
                        <Link 
                        to={`/app/edit/${id}`}
                        href={`/app/edit/${id}`}
                        className="text-sm text-gray-700 underline"
                        method="get"
                        >
                          Edit App
                        </Link>
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
          <div className="flex items-center justify-right mt-4 text-lg text-gray-900">
            <Link href={route('create.app')} className="text-sm text-gray-700 underline">
              Create App
            </Link>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}