import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";

function HeroSection(){
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex 
        flex-col items-center justify-center relative
        overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-0 w-full text-center">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
                <h1 className="mt-20 md:mt-0 text text-4xl md:text-7xl font-bold
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    The World of Advanced Aesthetics</h1>
                <p className="mt-4 font-normal text-based md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Technology and medicine work in symbioses to bring the most effective treatments 
                    related to health, hygiene and wellness. Viva Skintech is a firm based in the silicon
                    valley of India – Bengaluru which provides end to end skin care and wellness solutions.
                    With some of the worlds finest minds and surgeons working closely with state of the art
                    technology bring our clients the best and safest treatments
                    </p>

                    <div className="mt-4">
                        <Link href={"/services"}>
                            <Button borderRadius="1rem" className="bg-white dark:bg-black text-black
                            dark:text-white border-neutral-200 dark:border-slate-800">
                                Explore Our Services
                            </Button>

                        </Link>
                        
                    </div>
            </div>
        </div>
    )
}

export default HeroSection;