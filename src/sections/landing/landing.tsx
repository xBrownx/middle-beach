import { useNavigationContext } from '@/context';export function Landing() {    const { pageRefs } = useNavigationContext();    return (        <section ref={pageRefs.landing}>            <div className={'h-screen'}></div>        </section>    );}