"use client"

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {
    const {collapsed,onCollapse,onExpand} = useSidebar((state) => state);
    const label = collapsed ? "Expand" : "Collapse";
    return(
        <>
        {
            collapsed && (
                <div className="hidden 
                lg:flex items-center justify-center
                pt-4 mb-4">
                    <Hint label={label} asChild side="right">
                    <Button className="h-auto p-2" variant="ghost" onClick={onExpand}>
                        <ArrowRightFromLine className="h-4 w-4"/>
                    </Button>
                    </Hint>
                </div>
            )
        }
         { !collapsed && (
            <div className="p-3 pl-6  mb-2 flex items-center w-full ">
                <p className="font-semibold text-primary">For you </p>
                <Hint label={label} side="right" asChild>
                <Button className="h-auto ml-auto p-2" variant="ghost" onClick={onCollapse}>
                    <ArrowLeftFromLine className="h-4 w-4"/>
                </Button>
                </Hint>
            </div>
         )}
        </>
    )
}