import poly from '@/assets/modal-poly.svg';import { cn } from '@/utils/cn';type ModalProps = {    title: string;    area?: string;    className?: string;};export function Modal({ title, className, area }: ModalProps) {    return (        <div            className={cn(                'z-20 absolute flex flex-col items-center',                className,            )}        >            <div                className={'z-20 flex h-24 w-32 flex-col rounded bg-white p-2 '}            >                <h3                    className={                        'font-bodyBold text-xl font-semibold text-primary-indigo'                    }                >                    {title}                </h3>                <h4 className={'font-body text-black'}>Total Area:</h4>                <h5                    className={                        'w-fit border-b border-primary-red font-body text-black/50'                    }                >                    {area}                </h5>            </div>            <img src={poly} alt={''} className={'-translate-y-1'} />        </div>    );}