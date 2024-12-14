import React from 'react';import { CgProfile } from 'react-icons/cg';import { CiMobile4 } from 'react-icons/ci';import agentTwo from '@/assets/hamish-crouch360x3980.jpg';import DownloadIcon from '@/assets/icon-download.svg';import agentOne from '@/assets/jay-nash360x4128.jpg';import offerFormPdf from '@/assets/pdf/offer-form.pdf';import sitePlanPdf from '@/assets/pdf/site-plan.pdf';import { Section } from '@/components/section';import { SectionBody, SectionTitle } from '@/components/text';import { useNavigationContext } from '@/context';import { cn } from '@/utils/cn';export function Agency() {    const { pageRefs } = useNavigationContext();    return (        <Section ref={pageRefs.agency} className={'lg:px-8 lg:py-32'}>            <div                className={                    'flex size-full flex-col justify-between gap-8 pb-8 lg:gap-16'                }            >                <SectionTitle>AGENCY</SectionTitle>                <div                    className={                        'flex flex-col gap-16 px-4 lg:gap-8 2xl:flex-row'                    }                >                    <Agent                        imgSrc={agentOne}                        name={'JAY NASH'}                        title={'Director, Head of Industrial & Logistics – SA'}                        email={'jay.nash@cushwake.com'}                        phone={'+61 433 173 225'}                        propertiesLink={                            'https://www.cushwakeproperty.com.au/people/jay-nash/658'                        }                    />                    <Agent                        imgSrc={agentTwo}                        name={'HAMISH CROUCH'}                        title={'Director, Logistics & Industrial - SA'}                        email={'hamish.crouch@cushwake.com'}                        phone={'+61 433 278 821'}                        propertiesLink={                            'https://www.cushwakeproperty.com.au/people/hamish-crouch/657'                        }                    />                </div>                <div                    className={                        'flex w-full flex-col gap-4 xl:h-16 xl:flex-row xl:gap-8'                    }                >                    <a                        href={sitePlanPdf}                        download="Site Plan - Middle Beach Industrial Estate SA"                        target="_blank"                        className={cn(                            `inline-flex size-full flex-row gap-2 items-center border-secondary-blue border justify-center rounded-lg bg-primary-white`,                            "group relative flex  overflow-hidden rounded-lg border-secondary-blue px-4 py-2 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-secondary-blue after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                        )}                        rel="noreferrer"                    >                        <img                            src={DownloadIcon}                            alt={''}                            width={32}                            height={32}                            className={                                'z-10 transition-all duration-300 group-hover:fill-white group-hover:brightness-0 group-hover:invert'                            }                        />                        <h3                            className={                                'z-10 font-subHeadline text-xl text-secondary-blue transition-all duration-300 group-hover:text-white'                            }                        >                            FLOOR PLAN                        </h3>                    </a>                    <a                        href={offerFormPdf}                        download="Offer Form - Middle Beach Industrial Estate SA"                        target="_blank"                        className={cn(                            `inline-flex size-full flex-row gap-2 items-center border-secondary-blue border justify-center rounded-lg bg-primary-white`,                            "group relative flex  overflow-hidden rounded-lg border-secondary-blue px-4 py-2 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-secondary-blue after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                        )}                        rel="noreferrer"                    >                        <img                            src={DownloadIcon}                            alt={''}                            width={32}                            height={32}                            className={                                'z-10 transition-all duration-300 group-hover:fill-white group-hover:brightness-0 group-hover:invert'                            }                        />                        <h3                            className={                                'z-10 font-subHeadline text-xl text-secondary-blue transition-all duration-300 group-hover:text-white'                            }                        >                            LETTER OF OFFER                        </h3>                    </a>                </div>            </div>        </Section>    );}function Agent({    imgSrc,    name,    title,    email,    phone,    propertiesLink,}: {    imgSrc: string;    name: string;    title: string;    email: string;    phone: string;    propertiesLink: string;}) {    return (        <div className={'flex w-full flex-col gap-4 lg:gap-12'}>            <div className={'border-b border-b-primary-grey/20 pb-3 lg:pb-6'}>                <SectionBody                    className={                        'w-fit border-b border-b-primary-red pb-1 pr-4 font-subHeadline text-3xl font-normal text-primary-grey'                    }                >                    {name}                </SectionBody>                <SectionBody className={'pt-2 text-secondary-blue lg:text-2xl'}>                    {title}                </SectionBody>            </div>            <div className={'flex w-fit flex-col gap-4 2xl:flex-row 2xl:gap-6'}>                <img                    src={imgSrc}                    alt={'agent'}                    className={'h-60 object-cover'}                />                <div className={'flex w-fit flex-1 flex-col justify-between'}>                    <div                        className={                            'flex h-full w-fit flex-col gap-3 border-b border-b-primary-grey/20 pb-4 lg:gap-2.5 lg:pb-12'                        }                    >                        <a                            className={                                'group flex flex-row items-center gap-2 lg:gap-2'                            }                            href={`mailto:${email}`}                        >                            <CgProfile                                className={                                    'size-8 text-secondary-blue transition-all duration-200 ease-in-out lg:group-hover:text-[#60bad1]'                                }                            />                            <SectionBody                                className={                                    'font-subHeadline text-secondary-blue transition-all duration-200 ease-in-out lg:text-lg lg:group-hover:text-[#60bad1]'                                }                            >                                {email}                            </SectionBody>                        </a>                        <div                            className={                                'flex flex-row items-center gap-2 lg:gap-2'                            }                        >                            <CiMobile4                                className={'size-8 text-secondary-blue'}                            />                            <SectionBody                                className={'w-fit text-primary-grey/90'}                            >                                {phone}                            </SectionBody>                        </div>                    </div>                    <div                        className={                            'flex h-full items-end pt-4 lg:justify-start'                        }                    >                        <a                            className={cn(                                `inline-flex h-[40px] w-fit flex-col items-center border-primary-red border justify-center rounded-lg bg-primary-white`,                                "group relative flex overflow-hidden rounded-lg border-primary-red px-4 py-2 after:absolute after:inset-x-0 after:-top-full after:bottom-full after:-z-9 after:block after:bg-primary-red after:px-2 after:py-4 after:transition-all after:duration-300 after:content-[''] hover:after:inset-x-0 after:hover:bottom-0 hover:after:top-0",                            )}                            href={propertiesLink}                            target="_blank"                            rel="noreferrer"                        >                            <h3                                className={                                    'z-10 font-subHeadline font-normal text-primary-red transition-all duration-300 group-hover:text-white'                                }                            >                                VIEW PROPERTIES                            </h3>                        </a>                    </div>                </div>            </div>        </div>    );}