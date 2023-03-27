import { useEffect } from 'react';
import GuestLayout from '@/Layouts/Guest';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        type: '',
        status: ''
    });

    // useEffect(() => {
    //     return () => {
    //         reset('name', 'type');
    //     };
    // }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('create.app'));
    };

    return (
        <GuestLayout>
            <Head title="Create App" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="type" value="Type" />
                    <SelectInput 
                    className="mt-1 block w-full"
                    name="type"
                    value={data.type}
                    onChange={handleOnChange}
                    onLoad = {e => setData('type', e.target.value)}
                    required
                    >
                        <option value="">Select</option>
                        <option value="Website">Website</option>
                        <option value="Mobile_IOS">Mobile IOS</option>
                        <option value="Mobile_Android">Mobile Android</option>
                    </SelectInput>

                    <InputError message={errors.type} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="status" value="Status" />
                    <SelectInput 
                    className="mt-1 block w-full"
                    name="status"
                    value={data.status}
                    onChange={handleOnChange}
                    onLoad = {e => setData('status', e.target.value)}
                    required
                    >
                        <option value="">Select</option>
                        <option value="Pending">Pending</option>
                        <option value="In_Progress">In Progress</option>
                        <option value="Active">Active</option>
                    </SelectInput>

                    <InputError message={errors.status} className="mt-2" />
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
