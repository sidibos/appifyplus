import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
// import InputError from '@/Components/InputError';
import Button from '@/Components/Button';
import { useForm, Head } from '@inertiajs/inertia-react';
 
export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('roles.store'), { onSuccess: () => reset() });
    };
 
    return (
        <Authenticated auth={auth}>
            <Head title="Roles" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    {/* <InputError message={errors.message} className="mt-2" /> */}
                    <Button className="mt-4" processing={processing}>Role</Button>
                </form>
            </div>
        </Authenticated>
    );
}