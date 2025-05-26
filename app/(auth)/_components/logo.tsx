import Image from "next/image";
import { Poppins } from "next/font/google";

import {cn} from "@/lib/utils";

const font = Poppins({
  weight: ["200","300","400", "500", "600", "700","800"],
  subsets: ["latin"],
});


export const Logo = () =>{
    return(
        <div className="flex flex-col items-center gap-y-4">
         <div className="bg-white rounded-full p-2">
            <Image alt="Lestreamer" src="spooky.svg" height='80' width='80'/>
         </div>
         <div className={cn("flex flex-col items-center",font.className)}>
            <p className="text-xl font-semibold">
                Lestreamer

            </p>
            <p className = "font-xl font-semibold">
                Let's Stream Together
            </p>
         </div>
        </div>
    )
}