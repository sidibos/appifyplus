import GuestLayout from '@/Layouts/Guest';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import ValidationErrors from '@/Components/ValidationErrors';
import SelectComp from '@/Components/SelectComp';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Edit({app}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: app.name,
        type: app.type,
        status: app.status,
        customer_id: app.customer_id
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('app.update'));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const TypeList = ["Website", "Mobile_IOS", "Mobile_Android"];
    const StatusList = ["Pending", "In_Progress", "Active"];

    return (
        <GuestLayout>
            <Head title="Edit App" />

            <form onSubmit={submit} className="mt-6 space-y-6">
            <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={onHandleChange}
                        required
                        isFocused
                        autoComplete="name"
                    />
                </div>
                <div className="mt-4">
                    <InputError className="mt-2" message={errors.name} />
                    <SelectComp 
                    name="Type" 
                    className="mt-1 block w-full"
                    items={TypeList}
                    defaultValue={data.type}
                    />
                </div>
                <div className="mt-4">
                    <SelectComp 
                    name="Status" 
                    className="mt-1 block w-full"
                    items={StatusList}
                    defaultValue={data.status}
                    />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="customer_id" value="Customer_id" />
                    <TextInput
                        id="customer_id"
                        className="mt-1 block w-full"
                        value={data.customer_id}
                        onChange={onHandleChange}
                        required
                        isFocused
                        autoComplete="customer_id"
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Submit
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}