import React, {useState} from "react";
import {Button, Modal, TextInput} from "@mantine/core";
import {useDisclosure} from '@mantine/hooks';
import {IconAt} from "@tabler/icons-react";

function Banner() {
    const [opened, {open, close}] = useDisclosure(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function submit() {
        if (!firstName || !lastName || !email) {
            console.log('Please provide a valid first name, last name, and email.');
            return;
        }

        console.log(email, firstName, lastName);
        fetch('https://hou9ygfljg.execute-api.us-east-1.amazonaws.com/Testing/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
            })
        })
            .then(response => {
                console.log(response.text());
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (<div>
            <Modal opened={opened} onClose={close} title="Contest Entry" centered>
                <TextInput
                    placeholder="First name"
                    label="First name"
                    onChange={(event) => setFirstName(event.currentTarget.value)}
                    withAsterisk
                    value={firstName}
                />
                <TextInput
                    placeholder="Last name"
                    label="Last name"
                    onChange={(event) => setLastName(event.currentTarget.value)}
                    withAsterisk
                    value={lastName}
                />
                <TextInput
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    label="Your email"
                    placeholder="Your email"
                    icon={<IconAt size="0.8rem"/>}
                    withAsterisk
                />
                <br/>
                <Button onClick={submit} className="bg-orange-700 hover:bg-amber-300 hover:text-gray-800">
                    Enter!
                </Button>
            </Modal>
            <div className="container w-full mx-auto py-0.5 md:py-2 px-4 md:px-6">
                <div
                    className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div
                        className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12"
                        style={{
                            backgroundPosition: "bottom",
                            backgroundImage: 'url(https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
                            backgroundSize: 'cover'
                        }}>
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-2xl lg:text-2xl font-semibold text-white">End Of Season Sale</h1>
                            <p className="text-base lg:text-xl text-white mt-2">Save upto <span
                                className="font-bold">50%</span></p>
                        </div>
                    </div>

                    <div onClick={open}
                         className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-6/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative"
                         style={{
                             backgroundPosition: "bottom",
                             backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
                             backgroundSize: 'cover'
                         }}>
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-2xl lg:text-2xl font-semibold bg-gray-300 bg-opacity-25 text-gray-800">Click
                                to Enter our Spring Sale Contest</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}


export default Banner;
