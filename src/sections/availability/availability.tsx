import React, { useState } from 'react';import { Section } from '@/components/section';import { SectionBody, SectionSubtitle, SectionTitle } from '@/components/text';import { useNavigationContext } from '@/context';import { LOT_DATA_11_20, LOT_DATA_2_10 } from '@/sections/availability/data';import { AvailabilityMap } from '@/sections/availability/map';import { Lot } from '@/sections/availability/types';import { cn } from '@/utils/cn';export function Availability() {    const { pageRefs } = useNavigationContext();    const [hoverId, setHoverId] = useState<string | null>(null);    return (        <Section ref={pageRefs.availability}>            <div                className={                    'relative box-border flex size-full flex-col gap-4 lg:gap-4 lg:py-8 2xl:py-0'                }            >                <div className={'flex w-full flex-row'}>                    <div className={'flex-1'}>                        <SectionTitle>AVAILABILITY</SectionTitle>                    </div>                    <div                        className={                            'relative flex flex-1 flex-row items-center gap-4'                        }                    >                        <SectionSubtitle>SITE PLAN</SectionSubtitle>                        <div                            className={                                'absolute flex w-full flex-row items-center justify-center gap-8'                            }                        >                            <SectionBody                                className={                                    'border-l-[24px] border-secondary-blue pl-2'                                }                            >                                AVAILABLE                            </SectionBody>                            <SectionBody                                className={                                    'border-l-[24px] border-primary-grey pl-2'                                }                            >                                SOLD                            </SectionBody>                        </div>                    </div>                </div>                <div                    className={                        'flex size-full flex-col gap-0 2xl:flex-row 2xl:gap-0'                    }                >                    <div className={'flex  flex-1'}>                        <LotButtons hoverId={hoverId} setHoverId={setHoverId} />                    </div>                    <div className={'size-full flex-1'}>                        <AvailabilityMap                            hoverId={hoverId}                            setHoverId={setHoverId}                        />                    </div>                </div>            </div>        </Section>    );}function LotButtons({    hoverId,    setHoverId,}: {    hoverId: string | null;    setHoverId: (hoverId: string | null) => void;}) {    return (        <div className={cn('size-full flex flex-row gap-16 pl-4 pr-16 ')}>            <div className={'flex size-full flex-col  gap-2'}>                <ul className={'flex h-full flex-col justify-end gap-3'}>                    <li                        className={                            'flex h-10 flex-row items-center justify-center gap-5 rounded-[8px] bg-primary-grey'                        }                    ></li>                    {LOT_DATA_2_10.map((lot) => (                        <LotButton                            key={lot.id}                            lot={lot}                            hoverId={hoverId}                            setHoverId={setHoverId}                        />                    ))}                </ul>            </div>            <div className={'flex size-full flex-col justify-end gap-2'}>                <ul className={'flex flex-col gap-3'}>                    {LOT_DATA_11_20.map((lot) => (                        <LotButton                            key={lot.id}                            lot={lot}                            hoverId={hoverId}                            setHoverId={setHoverId}                        />                    ))}                </ul>            </div>        </div>    );}function LotButton({    lot,    hoverId,    setHoverId,}: {    lot: Lot;    hoverId: string | null;    setHoverId: (hoverId: string | null) => void;}) {    return (        <li            className={cn(                'flex h-11 flex-row items-center justify-center gap-5 rounded-[8px]  transition-all duration-300 hover:cursor-pointer hover:bg-primary-indigo',                hoverId === lot.id ? 'bg-primary-indigo' : 'bg-secondary-blue',            )}            onMouseEnter={() => setHoverId(lot.id)}            onMouseLeave={() => setHoverId(null)}        >            <SectionSubtitle                className={'flex-1 text-end text-white md:text-xl'}            >                {lot.label}            </SectionSubtitle>            <SectionSubtitle className={'text-center text-white'}>                |            </SectionSubtitle>            <SectionBody className={'flex-1 text-white'}>                {lot.area}            </SectionBody>        </li>    );}