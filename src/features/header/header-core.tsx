import logo from '@/assets/business-logo.svg';import { useNavigationContext } from '@/context';import { MenuDesktop } from '@/features/header/components/menu-desktop';import { MenuMobile } from '@/features/header/components/menu-mobile';import { useScroll } from '@/hooks/use-scroll';import { cn } from '@/utils/cn';export function HeaderCore() {    const { scrollDirection } = useScroll();    const { navigateTo } = useNavigationContext();    return (        <div            className={cn(                'z-40 max-w-full top-0 fixed box-border flex h-[100px] w-full justify-center overflow-hidden bg-primary-indigo pb-2 transition-all duration-500',                scrollDirection === 'up'                    ? 'invisible -translate-y-full'                    : 'visible',            )}        >            <div                className={cn(                    'box-border flex size-full w-full max-w-[1440px] flex-row items-center justify-between gap-4 overflow-hidden',                    '2xl:px-0',                    'px-4',                )}            >                <button onClick={() => navigateTo('landing')}>                    <div                        className={                            'flex flex-row items-end justify-center gap-4 bg-transparent'                        }                    >                        <img                            src={logo}                            alt="business-logo"                            width={75}                            height={54}                        />                        <h2                            className={                                'flex w-fit max-w-60 bg-transparent text-start align-text-bottom font-subHeadline text-xl leading-[20px] tracking-widest text-white'                            }                        >                            CUSHMAN & WAKEFIELD                        </h2>                    </div>                </button>                <MenuDesktop />                <MenuMobile />            </div>        </div>    );}