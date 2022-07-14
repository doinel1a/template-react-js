import { useState } from 'react';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

import { useStateContext } from '../contexts/ContextProvider';

import { Form, Input } from './Form';
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from './Buttons';
import { Heading, Paragraph } from './Text';

const Home = () => {
    const { isDarkMode } = useStateContext();
    const [activeInput, setActiveInput] = useState('');

    return (
        <section
            className={` h-full flex flex-col justify-center items-center gap-y-10 `}
        >
            <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                <ButtonPrimary
                    type='submit'
                    text='Primary'
                    icon={faAddressBook}
                />

                <ButtonSecondary type='button' text='Secondary' />
                <ButtonTertiary type='button' text='Tertiary' />
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center gap-x-12'>
                <div className='flex lg:flex-col gap-y-4'>
                    <div>
                        <Heading type='h1' text='Heading 1' />
                        <Heading type='h2' text='Heading 2' />
                        <Heading type='h3' text='Heading 3' />
                        <Heading type='h4' text='Heading 4' />
                        <Heading type='h5' text='Heading 5' />
                        <Heading type='h6' text='Heading 6' />
                    </div>
                    <div className='w-56'>
                        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Form
                        children={
                            <>
                                <Input
                                    id='name'
                                    type='text'
                                    label='Name'
                                    labelCss={
                                        activeInput === 'name'
                                            ? '!text-blue-600'
                                            : ''
                                    }
                                    onFocus={() => setActiveInput('name')}
                                    onBlur={() => setActiveInput('')}
                                />
                                <Input
                                    id='surname'
                                    type='text'
                                    label='Surname'
                                    labelCss={
                                        activeInput === 'surname'
                                            ? '!text-blue-600'
                                            : ''
                                    }
                                    onFocus={() => setActiveInput('surname')}
                                    onBlur={() => setActiveInput('')}
                                />
                                <Input
                                    id='email'
                                    type='text'
                                    label='E-mail'
                                    labelCss={
                                        activeInput === 'email'
                                            ? '!text-blue-600'
                                            : ''
                                    }
                                    onFocus={() => setActiveInput('email')}
                                    onBlur={() => setActiveInput('')}
                                />
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
