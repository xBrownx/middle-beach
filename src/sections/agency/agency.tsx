import React from 'react';import { CgProfile } from 'react-icons/cg';import { CiMobile4 } from 'react-icons/ci';import agentTwo from '@/assets/Hamish Crouch.jpg';import DownloadIcon from '@/assets/icon-download.svg';import keyHighlightsIcon from '@/assets/icon-key-highlights.svg';import agentOne from '@/assets/Jay Nash Photo.jpg';import { Section } from '@/components/section';import { SectionBody, SectionTitle } from '@/components/text';import { useNavigationContext } from '@/context';import { cn } from '@/utils/cn';export function Agency() {    const { pageRefs } = useNavigationContext();    return (        <Section ref={pageRefs.agency}>            <div                className={                    'flex size-full flex-col justify-between gap-16 lg:gap-16'                }            >                <SectionTitle>AGENCY</SectionTitle>                <div className={'flex flex-row gap-8 px-4 '}>                    <Agent                        imgSrc={agentOne}                        name={'JAY NASH'}                        title={'Director of Logistics & Industrial - SA'}                        email={'jay.nash@cushwake.com'}                        phone={'+61 433 173 225'}                    />                    <Agent                        imgSrc={agentTwo}                        name={'HAMISH CROUCH'}                        title={                            'Associate Director of Logistic & Industrial - SA'                        }                        email={'hamish.crouch@cushwake.com'}                        phone={'+61 433 278 821'}                    />                </div>                <div className={'h-16 w-full'}>                    <button                        className={cn(                            `inline-flex size-full flex-row gap-2 items-center border-secondary-blue border justify-center rounded-lg bg-primary-white`,                            "group relative flex  overflow-hidden rounded-lg border-secondary-blue px-4 py-2 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-secondary-blue after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                        )}                    >                        <img                            src={DownloadIcon}                            alt={''}                            width={32}                            height={32}                            className={                                'z-10 transition-all duration-300 group-hover:fill-white group-hover:brightness-0 group-hover:invert'                            }                        />                        <h3                            className={                                'z-10 font-subHeadline text-xl text-secondary-blue transition-all duration-300 group-hover:text-white'                            }                        >                            FLOOR PLAN                        </h3>                    </button>                </div>            </div>        </Section>    );}function Agent({    imgSrc,    name,    title,    email,    phone,}: {    imgSrc: string;    name: string;    title: string;    email: string;    phone: string;}) {    return (        <div className={'flex w-full flex-col gap-12'}>            <div className={'border-b border-b-primary-grey/20 pb-6'}>                <SectionBody                    className={                        'w-fit border-b border-b-primary-red pb-1 pr-4 font-subHeadline text-3xl font-normal text-primary-grey'                    }                >                    {name}                </SectionBody>                <SectionBody className={'pt-2 text-2xl text-secondary-blue'}>                    {title}                </SectionBody>            </div>            <div className={'flex w-fit flex-row gap-6'}>                <img                    src={imgSrc}                    alt={'agent'}                    className={'size-64 object-cover'}                />                <div className={'flex w-fit flex-1 flex-col justify-between'}>                    <div                        className={                            'flex h-full w-fit flex-col gap-6 border-b border-b-primary-grey/20 pb-12'                        }                    >                        <div className={'flex flex-row items-center gap-4'}>                            <CgProfile                                className={'size-10 text-secondary-blue'}                            />                            <SectionBody                                className={'text-2xl text-secondary-blue'}                            >                                {email}                            </SectionBody>                        </div>                        <div className={'flex flex-row items-center gap-4'}>                            <CiMobile4                                className={'size-10 text-secondary-blue'}                            />                            <SectionBody                                className={                                    'w-fit  text-xl text-primary-grey/90'                                }                            >                                {phone}                            </SectionBody>                        </div>                    </div>                    <div className={'flex h-full items-end justify-center'}>                        <button                            className={cn(                                `inline-flex h-[40px] w-fit flex-col items-center border-primary-red border justify-center rounded-lg bg-primary-white`,                                "group relative flex overflow-hidden rounded-lg border-primary-red px-4 py-2 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-primary-red after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                            )}                        >                            <h3                                className={                                    'z-10 font-subHeadline font-normal text-primary-red transition-all duration-300 group-hover:text-white'                                }                            >                                VIEW PROPERTIES                            </h3>                        </button>                    </div>                </div>            </div>        </div>    );}