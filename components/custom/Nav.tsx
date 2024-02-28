import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'


const Nav = () => {
    return (
        <div className='flex justify-between bg-[#002246] p-3 z-50'>
            <img src="/logo.png" alt="" />
            <div className='md:hidden'>
                <Dialog>
                    <DialogTrigger>
                        <img src="/ham.png" className='w-7 h-5' alt="" />
                    </DialogTrigger>
                    <DialogContent className='md:hidden bg-[#002246] text-white pt-10'>
                        <div>
                            <ul>
                                <li className='flex items-center'><img src="/Home.png" className='mr-3 size-6' alt="" /><p className='text-2xl'>Home</p></li>
                                <li className='flex items-center'>
                                    <Accordion className='inline' type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className='flex justify-start'><img src="/products.png" className='mr-3 size-6 text-3xl font-semibold' alt="" /><p className='text-2xl'>Our Products</p></AccordionTrigger>
                                            <AccordionContent className='flex flex-col ml-8'>
                                                <Link className='text-xl' href={'/'}>- Hospital files</Link>
                                                <Link className='text-xl' href='/'>- Aamantran Patrikas</Link>
                                                <Link className='text-xl' href={'/'}>- X-ray, MRI Covers</Link>
                                                <Link className='text-xl' href={'/'}>- Printed Shopping Bags</Link>
                                                <Link className='text-xl' href={'/'}>- Packing Box Printing</Link>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </li>
                                <li className='flex items-center'><img src="/About.png" className='mr-3 text-3xl font-semibold size-6' alt="" />
                                    <p className='text-3xl'>About Us</p></li>
                            </ul>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Nav