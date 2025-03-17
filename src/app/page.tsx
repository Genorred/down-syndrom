import {Metadata} from "next";
import Quiz from "@/app/Quiz";
import Banner from "./banner";

export const metadata: Metadata = {
    title: 'Dash!',
}
export default function Home() {
    return (
        <div className="">
            <header className='flex justify-center items-center h-24'>
                <h1>
                    {"<<< Література рекомендована автором до ознайомлення >>>"}
                </h1>
            </header>
            <main className='flex justify-center gap-4'>
                <Banner/>
                <Quiz/>
                <Banner/>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
